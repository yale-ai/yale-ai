'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Education() {
  const { theme } = useTheme();
  
  const educationOptions = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      title: 'Introduction to AI',
      description: 'A welcoming, hands-on program for people just starting out. Learn side by side with peers, and build the core AI skills you need.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: 'Advanced Workshops',
      description: 'Deep dive into topics of cutting-edge AI research, and their real-world applications through workshops and hackathons.'
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20'
    }`}>
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Education{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
            </h1>
            <div className="flex items-center space-x-3 mb-6">
              <p className={`text-lg font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
              }`}>Explore our AI and ML learning initiative</p>
            </div>
            
            <div className={`space-y-6 text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p>
                Our weekly education program is meant to welcome learners at every stage. Each week we&apos;ll dive into clear, focused topics with a practical, hands-on approach—whether it&apos;s diffusion models, reinforcement learning, or MCP servers. 
                We learn together as a community, sharing the best resources, tips, and self-study opportunities along the way and complementing coursework and lab research.
              </p>
              <p>
                We also provide a space to share class advice, learn about labs at Yale, and discover new areas and developments in AI. Along the way, we organize workshops and hackathon sessions that bring the community together.
              </p>
            </div>

            {/* Education Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {educationOptions.map((option, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-xl rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-gray-900/80 border-gray-700/30'
                      : 'bg-white/80 border-gray-200/30'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">
                        {option.icon}
                      </div>
                    </div>
                    <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {option.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Decorative Elements */}
          <div className="hidden md:flex lg:w-1/3 flex-col gap-6">
            <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 2.09L18.09 9 12 12.26 5.91 9 12 5.09z"/>
                </svg>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
                <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              <div className="w-1/2 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <div className="w-full h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-500/20"></div>
              <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
        {/* Sign Up CTA */}
        <div className="text-center mt-20">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Join The{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Program</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Register to be added to the Learning mailing list.
          </p>
          <a 
            href="https://forms.gle/d5uverEed7BFHQcQA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 inline-block"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
} 