# Palyam-Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Modern UI with Tailwind CSS
- TypeScript support
- Component-based architecture
- Smooth scrolling
- Interactive sections

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## CI/CD with Jenkins + Maven (CentOS)

This project uses Maven (via [pom.xml](pom.xml)) to run the Node.js build in Jenkins. The pipeline lives in [Jenkinsfile](Jenkinsfile).

### 1) Push to GitHub

1. Create a GitHub repository
2. Push this project to GitHub

### 2) Prepare your CentOS server (deploy target)

Install Nginx and open HTTP/HTTPS:

```bash
sudo dnf install -y nginx rsync
sudo systemctl enable --now nginx
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

Create the deploy directory:

```bash
sudo mkdir -p /var/www/portfolio
sudo chown -R $USER:$USER /var/www/portfolio
```

Optional: configure Nginx to serve the site (basic example):

```bash
sudo tee /etc/nginx/conf.d/portfolio.conf >/dev/null <<'EOF'
server {
  listen 80;
  server_name _;
  root /var/www/portfolio;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}
EOF

sudo nginx -t
sudo systemctl reload nginx
```

### 3) Jenkins setup (on your Linux Jenkins server)

Install Jenkins and Maven (CentOS example):

```bash
sudo dnf install -y java-17-openjdk maven git
```

Ensure Jenkins has access to Maven. Either install Maven via the OS (above) or configure it in Jenkins Global Tool Configuration.

### 4) Jenkins credentials

Create an SSH key for Jenkins and add it to your CentOS deploy server:

```bash
ssh-keygen -t ed25519 -C "jenkins@your-domain"
ssh-copy-id youruser@your-centos-server
```

In Jenkins:
1. Add the SSH private key as a credential (type: SSH Username with private key)
2. Note the **Credential ID** (used as `SSH_CREDENTIALS_ID`)

### 5) Create Jenkins Pipeline Job

1. New Item → Pipeline
2. Pipeline Definition: **Pipeline script from SCM**
3. SCM: Git → Repo URL (your GitHub repo)
4. Branch: `main` (or your branch)

### 6) Configure Jenkins environment variables

Set these in the Jenkins job (or globally):

- `DEPLOY_HOST` = your CentOS server IP/hostname
- `DEPLOY_USER` = SSH user on CentOS
- `DEPLOY_PATH` = `/var/www/portfolio`
- `SSH_CREDENTIALS_ID` = Jenkins SSH credential ID

### 7) Pipeline flow

The [Jenkinsfile](Jenkinsfile) stages run in order:

1. **Checkout**: pulls from GitHub
2. **Compile**: runs `mvn package` → installs Node/NPM and builds Vite
3. **Test**: runs `mvn test` → executes `npm run lint`
4. **Package**: archives build output
5. **Deploy**: `rsync` to your CentOS server
6. **Live**: reloads Nginx

### 8) Go live

After a successful pipeline run, your site is live at:

```
http://<DEPLOY_HOST>/
```

## Notes

- Maven dependencies are handled by [pom.xml](pom.xml) using `frontend-maven-plugin`.
- Node.js and npm are installed automatically during the Maven build.
- Linting is used as the "test" step for this frontend project.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## License

MIT
