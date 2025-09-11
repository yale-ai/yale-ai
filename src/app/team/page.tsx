'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

export default function Team() {
  const { theme } = useTheme();
  
  const executiveBoard = [
    {
      name: "Ananya Krishna",
      role: "Officer",
      image: "/team/ananya.jpeg"
    },
    {
      name: "Lukass Kellijs",
      role: "Officer",
      image: "/team/lukass.jpg"
    },
    {
      name: "Aryan Agarwal",
      role: "Officer",
      image: "/team/aryan.jpeg"
    },
    {
      name: "Raymond Hou",
      role: "Officer",
      image: "/team/raymond.jpeg"
    }
    ,
    {
      name: "Arjan Kohli",
      role: "Officer",
      image: "/team/arjan.jpg"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Executive Board Section */}
        <div className="text-center mb-16">
            <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <p className={`text-lg font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
              }`}>The people working to get Yale AI off the ground</p>
            </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executiveBoard.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 mx-auto">
                <div className={`w-44 h-44 mx-auto rounded-2xl overflow-hidden border-4 transition-all duration-300 backdrop-blur-xl relative ${
                  theme === 'dark'
                    ? 'border-gray-600/30 group-hover:border-blue-500/50 bg-gradient-to-br from-gray-800 to-gray-700'
                    : 'border-gray-200/30 group-hover:border-blue-500/50 bg-gradient-to-br from-blue-50 to-purple-50'
                }`}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} headshot`}
                      fill
                      sizes="176px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className={`w-16 h-16 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {member.name}
              </h3>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Add a section for general members or other team categories */}
        <div className="text-center mt-20">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Join Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Interested in joining Yale AI? We&apos;d be very happy to hear from you!
          </p>
          <a 
            href="https://forms.gle/Foggqs5CKXeGpvJA8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 inline-block"
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
} 