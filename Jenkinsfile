pipeline {
  agent any

  environment {
    DEPLOY_HOST = "${env.DEPLOY_HOST}"          // e.g. 192.168.1.10
    DEPLOY_USER = "${env.DEPLOY_USER}"          // e.g. ubuntu
    DEPLOY_PATH = "${env.DEPLOY_PATH}"          // e.g. /var/www/portfolio
    SSH_CREDENTIALS_ID = "${env.SSH_CREDENTIALS_ID}" // Jenkins credential ID
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Compile') {
      steps {
        sh 'mvn -B -ntp -DskipTests package'
      }
    }

    stage('Test') {
      steps {
        sh 'mvn -B -ntp test'
      }
    }

    stage('Package') {
      steps {
        archiveArtifacts artifacts: '**/*.zip,dist/**', fingerprint: true
      }
    }

    stage('Deploy') {
      when {
        allOf {
          expression { env.DEPLOY_HOST?.trim() }
          expression { env.DEPLOY_USER?.trim() }
          expression { env.DEPLOY_PATH?.trim() }
          expression { env.SSH_CREDENTIALS_ID?.trim() }
        }
      }
      steps {
        sshagent(credentials: [env.SSH_CREDENTIALS_ID]) {
          sh """
            rsync -avz --delete dist/ ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/
          """
        }
      }
    }

    stage('Live') {
      when {
        allOf {
          expression { env.DEPLOY_HOST?.trim() }
          expression { env.DEPLOY_USER?.trim() }
          expression { env.DEPLOY_PATH?.trim() }
          expression { env.SSH_CREDENTIALS_ID?.trim() }
        }
      }
      steps {
        sshagent(credentials: [env.SSH_CREDENTIALS_ID]) {
          sh """
            ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${DEPLOY_HOST} 'sudo systemctl reload nginx || true'
          """
        }
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
