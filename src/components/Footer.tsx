import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-indigo-400">Palyam Dileep</h2>
            <p className="text-gray-400 mt-2">Aspiring Software Engineer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/palyam123"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/palyamdileep"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:dileeppalyam@gmail.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919059244804"
              className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Palyam Dileep. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-indigo-600 p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;