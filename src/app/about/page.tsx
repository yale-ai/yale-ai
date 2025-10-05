'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function About() {
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
                About{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Yale Artificial Intelligence Association</span>
              </h1>
              <div className="flex items-center space-x-3 mb-6">
                <p className={`text-lg font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                }`}>The AI Community at Yale</p>
              </div>
            </div>
            
            <div className={`space-y-6 text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p>
              Yale Artificial Intelligence Association is a community for Yale students passionate about exploring the possibilities and challenges of artificial intelligence. Our goal is to make AI accessible, engaging, and collaborative—whether through hands-on projects, thought-provoking discussions, or creative applications of cutting-edge tools. We believe that AI is not just a technical field, but one that intersects with nearly every aspect of society, and we aim to provide a space where people from all disciplines can learn, build, and contribute.
              </p>
              <p>
              We exist to empower Yale students to shape the future of AI together—by working on ambitious projects, hosting conversations with leading thinkers, and organizing workshops, hackathons, and events that spark curiosity and innovation (and are fun too). Whether you&apos;re brand new to AI or already deeply immersed, Yale Artificial Intelligence Association is a way for students to help each other connect and grow.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-12">
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600'
                    : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Inclusivity</h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>Welcoming all skill levels</p>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600'
                    : 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Creativity</h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>Ambitious & creative ideas</p>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600'
                    : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-100'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Education</h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>Knowledge sharing & growth</p>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600'
                    : 'bg-gradient-to-br from-green-50 to-blue-50 border-green-100'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Collaboration</h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>Teamwork & partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Visual Elements */}
          <div className="hidden md:flex lg:w-1/3 flex-col gap-6">
            {/* AI Network Visualization */}
            <div className={`relative w-full h-48 rounded-3xl flex items-center justify-center border overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600/30'
                : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-blue-200/30'
            }`}>
              <div className={`absolute inset-0 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-700/30 to-gray-600/30'
                  : 'bg-gradient-to-br from-blue-50/30 to-purple-50/30'
              }`}></div>
              
              {/* Animated Network Nodes */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <path d="M50 100 Q100 50 150 100" stroke="url(#gradient1)" strokeWidth="2" fill="none" opacity="0.3"/>
                <path d="M50 100 Q100 150 150 100" stroke="url(#gradient2)" strokeWidth="2" fill="none" opacity="0.2"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#06B6D4', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Research Focus */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            {/* Community Impact */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
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

        {/* Additional Info Section */}
        <div className="mt-20">
          <div className={`backdrop-blur-xl rounded-3xl p-8 shadow-xl border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gray-900/80 border-gray-700/30'
              : 'bg-white/80 border-gray-200/30'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>What We Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm7 13H5v-2.5c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5V19z"/>
                  </svg>
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Research Projects</h4>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Student-led initiatives exploring cutting-edge AI applications</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Workshops & Classes</h4>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Hands-on learning experiences for all skill levels</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Community Building</h4>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Networking events and collaborative opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 