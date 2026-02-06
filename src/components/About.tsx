import React from 'react';
import { Code, Database, Cloud, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hi, I'm Palyam Dileep, an aspiring software engineer with a strong foundation in building scalable web applications and cloud-based systems. I am skilled in Python, C, SQL, and Agile methodologies, with hands-on experience in designing user-friendly solutions that enhance performance and reliability. I am passionate about solving real-world problems through innovative technology and working collaboratively with teams to achieve impactful results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Code size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <p className="text-gray-600">
              Proficient in Python, C, and SQL with experience in developing efficient and scalable applications.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Database size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
            <p className="text-gray-600">
              Experience with Tableau, Hive, and Apache Spark for data processing and visualization.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Cloud size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Technologies</h3>
            <p className="text-gray-600">
              Hands-on experience with AWS Cloud services and cloud-integrated dashboard development.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
            <p className="text-gray-600">
              Awarded 25% scholarship for academic excellence at GITAM University with 8.00 CGPA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;