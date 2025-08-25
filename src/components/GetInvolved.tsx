import React from 'react';
import Link from 'next/link';

const GetInvolved = () => {
  const involvementOptions = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Join the Mailing List',
      description: 'Stay updated with our latest events, project opportunities, and AI community news delivered straight to your inbox.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Create With Us',
      description: 'Join a project team and collaborate with fellow students on AI projects, from research initiatives to practical applications.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: 'Learn With Us',
      description: 'Join our workshops, speaker series, and educational programs to advance your AI and machine learning skills.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Involved</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in joining the Yale AI community?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <a
              key={index}
              href="https://yaleconnect.yale.edu/yaia/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/30 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer hover:bg-white">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {option.description}
                  </p>
                  <div className="text-gray-900 font-medium group-hover:text-purple-600 transition-colors">
                    Get Started →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved; 