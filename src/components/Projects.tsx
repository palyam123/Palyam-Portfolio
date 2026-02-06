import React, { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Smart Vehicle Tracking System',
      description: 'Designed and implemented a comprehensive GPS and GSM-based tracking system for real-time vehicle location monitoring and management.',
      image: 'https://images.unsplash.com/photo-1743496842832-ae3070369312?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'iot',
      technologies: ['GPS', 'GSM', 'AWS', 'MongoDB', 'Embedded Systems', 'Real-time Tracking'],
      details: [
        'Developed a robust tracking system using GPS and GSM modules for accurate location data transmission',
        'Implemented geofencing features with customizable boundaries and instant alert notifications',
        'Achieved high accuracy tracking within 2.5 meters range using advanced GPS algorithms',
        'Integrated AWS services for scalable data storage and real-time processing',
        'Created a user-friendly dashboard for monitoring multiple vehicles simultaneously',
        'Implemented power-efficient sleep modes to extend battery life by 40%',
        'Added support for emergency alerts and unauthorized movement detection'
      ],
      location: 'GITAM Deemed University',
      date: 'August 2024 - March 2025',
      impact: 'The system has been successfully tested with a fleet of 5 vehicles, demonstrating 99.9% uptime and reducing unauthorized usage by 85%.'
    },
    {
      id: 2,
      title: 'Embedded System Development for Automotive Dashboard Displays',
      description: 'Developed a sophisticated Qt Creator-based dashboard interface for comprehensive cluster monitoring and management in automotive systems.',
      image: 'https://images.unsplash.com/photo-1743497563617-f6a8306aaba7?q=80&w=3245&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'desktop',
      technologies: ['Qt Creator', 'C++', 'UI/UX Design', 'Performance Optimization', 'MongoDB'],
      details: [
        'Architected and implemented a modular dashboard system using Qt Creator and C++',
        'Developed custom widgets for real-time data visualization and monitoring',
        'Implemented multi-threading for smooth UI updates during intensive operations',
        'Created an automated testing framework reducing testing time by 25%',
        'Optimized memory usage resulting in 40% reduction in resource consumption',
        'Integrated CAN bus communication for real-time vehicle data acquisition',
        'Implemented fault detection and diagnostic features'
      ],
      location: 'KPIT Technologies, Bangalore',
      date: 'July 2024 - August 2024',
      impact: 'The dashboard system has been adopted by the QA team, leading to a 30% increase in testing efficiency and a 45% reduction in bug detection time.'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('desktop')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'desktop' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => setActiveTab('iot')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'iot' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              IoT
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">Impact:</h4>
                  <p className="text-indigo-700">{project.impact}</p>
                </div>
                
                <div className="flex flex-col space-y-2 text-sm text-gray-500 mt-4 pt-4 border-t">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;