import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and internship experiences that have shaped my skills and knowledge.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="h-full w-1 bg-indigo-200 absolute left-0 sm:left-16 top-0"></div>
            <div className="absolute left-0 sm:left-16 top-6 -ml-2.5 h-6 w-6 rounded-full border-4 border-indigo-600 bg-white"></div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Software Engineer Intern</h3>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full mt-2 sm:mt-0">
                  KPIT
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-1" />
                  <span>May 2024 - August 2024</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>Bangalore</span>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Designed cloud-integrated dashboards to enhance communication efficiency by 20%.</li>
                <li>Developed a desktop cluster dashboard using Qt Creator, reducing testing time by 25%.</li>
                <li>Actively contributed to code reviews, debugging, and performance optimization.</li>
                <li>Followed Agile methodologies to deliver high-quality software solutions.</li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Agile</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Qt Creator</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Cloud Integration</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Dashboard Development</span>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://drive.google.com/file/d/1jpEzpiGinuXGiGdpwpcQbcAYucGxEt8W/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Big Data with Apache Spark</h4>
                  <p className="text-gray-600 mb-2">Coursera, 2025</p>
                  <p className="text-gray-700 mb-4">Gained hands-on experience in Big Data processing and Apache Spark.</p>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/verify/P5O8KNL2HPXH" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Advanced Prompt Engineering</h4>
                  <p className="text-gray-600 mb-2">Vanderbilt University (Coursera), 2025</p>
                  <p className="text-gray-700 mb-4">Gained advanced skills in prompt engineering, focusing on creating efficient and accurate prompts for AI models.</p>
                  <a 
                    href="https://drive.google.com/file/d/1jpEzpiGinuXGiGdpwpcQbcAYucGxEt8W/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;