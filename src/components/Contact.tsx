import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <a href="mailto:dileeppalyam@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    dileeppalyam@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                  <a href="tel:+919059244804" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    +91 9059244804
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Bangalore, Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/palyamdileep" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    linkedin.com/in/palyamdileep
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">GitHub</h4>
                  <a 
                    href="https://github.com/palyam123" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    github.com/palyam123
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

export default Contact;