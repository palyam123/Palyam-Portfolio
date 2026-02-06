import React from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'GITAM Deemed to be University',
      location: 'Bangalore',
      period: '2021 - 2025',
      grade: '8.00 CGPA',
      achievements: ['Awarded 25% scholarship for academic excellence'],
      logo: 'https://i.ytimg.com/vi/5lehrucpxh4/maxresdefault.jpg',
    },
    {
      id: 2,
      degree: 'Intermediate (12th Grade)',
      institution: 'Narayana JR College',
      location: 'Tirupati',
      period: '2019 - 2021',
      grade: '92.2%',
      achievements: [],
      logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    },
    {
      id: 3,
      degree: 'Secondary School (10th Grade)',
      institution: 'Gnanodaya High School',
      location: 'Tirupati',
      period: '2018 - 2019',
      grade: '9.2 CGPA',
      achievements: [],
      logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80',
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic journey and educational qualifications that have built my foundation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {education.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="rounded-lg overflow-hidden shadow-md h-40 w-full">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h3>
                    <h4 className="text-lg font-medium text-indigo-600 mb-3">{item.institution}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center">
                        <Award size={16} className="mr-1" />
                        <span>{item.grade}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    {item.achievements.length > 0 && (
                      <div className="mt-4">
                        <h5 className="font-medium text-gray-700 mb-2">Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {item.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;