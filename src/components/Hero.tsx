import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-100 rounded-full filter blur-3xl opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Hi, I'm <span className="text-indigo-600">Palyam Dileep</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                An aspiring software engineer with a strong foundation in building scalable web applications and cloud-based systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-1">
                <img 
                  src="https://images.unsplash.com/photo-1743491485634-b9b9bbc443d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Palyam Dileep" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg">
                <p className="font-medium">Aspiring Software Engineer</p>
                <p className="text-sm text-indigo-100">B.Tech CSE @ GITAM University</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#about" 
            className="animate-bounce bg-white p-2 rounded-full shadow-md text-indigo-600 hover:text-indigo-800 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;