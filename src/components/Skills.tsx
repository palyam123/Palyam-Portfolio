import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'Python',
    'C',
    'SQL',
    'Tableau',
    'Qt Creator',
    'AWS Cloud',
    'Apache Spark',
    'Hive'
  ];

  const softSkills = [
    'Stakeholder Management',
    'Data Analytics',
    'Communication',
    'Critical Thinking',
    'Team Collaboration'
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've developed a diverse set of technical and soft skills through academic projects, internships, and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-indigo-50 rounded-lg p-4 text-center hover:bg-indigo-100 transition-colors"
                >
                  <span className="font-medium text-indigo-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-purple-50 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors"
                >
                  <span className="font-medium text-purple-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'C', 'SQL', 'Tableau', 'Qt Creator', 'GPS/GSM modules', 'Hive', 'AWS Cloud', 'Apache Spark'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;