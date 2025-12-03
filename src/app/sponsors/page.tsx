'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Sponsor() {
  const { theme } = useTheme();
  
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
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sponsors</span>
              </h1>
              <div className="flex items-center space-x-3 mb-6">
                <p className={`text-lg font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                }`}>Supporting the future of AI at Yale</p>
              </div>
            </div>
            
            <div className={`space-y-6 text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p>
                We&apos;re building partnerships with organizations that share our vision of advancing AI education, research, and innovation. Our sponsors play a crucial role in empowering Yale students to explore the possibilities of artificial intelligence.
              </p>
            </div>

            {/* Coming Soon Card */}
            <div className="mt-12">
              <div className={`backdrop-blur-xl rounded-3xl p-12 shadow-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-900/80 border-gray-700/30'
                  : 'bg-white/80 border-gray-200/30'
              }`}>
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Placeholder Text */}
                  <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Coming Soon
                  </h2>
                  
                  <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Stay tuned! We&apos;ll update this page soon with information about our sponsors and partnership opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Decorative Visual Elements */}
          <div className="hidden md:flex lg:w-1/3 flex-col gap-6">
            {/* Sponsor Icon Card */}
            <div className={`w-full h-48 rounded-3xl flex items-center justify-center border overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600/30'
                : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-blue-200/30'
            }`}>
              <div className={`absolute inset-0 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-700/30 to-gray-600/30'
                  : 'bg-gradient-to-br from-blue-50/30 to-purple-50/30'
              }`}></div>
              
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Partnership Card */}
            <div className="flex gap-4">
              <div className={`w-1/2 h-32 rounded-3xl flex items-center justify-center border relative overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600/30'
                  : 'bg-gradient-to-br from-green-100 to-blue-100 border-green-200/30'
              }`}>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-700/30 to-gray-600/30'
                    : 'bg-gradient-to-br from-green-50/30 to-blue-50/30'
                }`}></div>
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              
              <div className={`w-1/2 h-32 rounded-3xl flex items-center justify-center border relative overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600/30'
                  : 'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200/30'
              }`}>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-700/30 to-gray-600/30'
                    : 'bg-gradient-to-br from-purple-50/30 to-pink-50/30'
                }`}></div>
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            {/* Impact Card */}
            <div className={`w-full h-64 rounded-3xl flex items-center justify-center border relative overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 border-gray-600/30'
                : 'bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 border-blue-200/30'
            }`}>
              <div className={`absolute inset-0 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-700/30 via-gray-600/30 to-gray-500/30'
                  : 'bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-cyan-50/30'
              }`}></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              
              {/* Floating AI Symbols */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute top-6 right-6 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.9s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

