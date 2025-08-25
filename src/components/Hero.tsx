"use client";



export default function Hero() {
  return (
    <main className="flex items-center justify-center min-h-screen py-4 pt-8">
      <div className="max-w-7xl ml-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            
            {/* Main Title with Visual Hierarchy */}
            <div className="space-y-3">
              <h1 className="text-4xl font-bold leading-tight">
                <div className="text-gray-900 mb-1">Yale</div>
                <div className="text-gray-800 mb-1">Artificial</div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">Intelligence</div>
                <div className="text-gray-900">Association</div>
              </h1>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-base text-gray-500 font-medium">An Undergraduate Organization</p>
              </div>
            </div>

            {/* Key Points - Visual Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-xl border border-blue-100">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Student-Led</h3>
                    <p className="text-xs text-gray-600">Undergraduate driven initiative</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-3 rounded-xl border border-purple-100">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">AI Innovation</h3>
                    <p className="text-xs text-gray-600">Cutting-edge research focus</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-3 rounded-xl border border-cyan-100">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Education</h3>
                    <p className="text-xs text-gray-600">Workshops & speaker events</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-3 rounded-xl border border-green-100">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Community</h3>
                    <p className="text-xs text-gray-600">Inclusive & vibrant network</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement - Highlighted */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-4 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Foster a vibrant, inclusive community where students explore cutting-edge AI research, 
                connect with leading experts, and work on ambitious, goal-oriented projects.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://yaleconnect.yale.edu/yaia/home/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm text-center"
              >
                Join Our Community
              </a>
              <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-6 py-2.5 rounded-full font-semibold transition-all duration-200 hover:bg-gray-50 text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Visual with More Content */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center ml-36">
              
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
              
              {/* Main Y/AI Visual */}
              <div className="text-center font-mono text-[10rem] font-bold leading-none select-none relative z-10">
                <div className="relative">
                  {/* Animated Y */}
                  <div className="animate-float-slow bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent filter drop-shadow-2xl">
                    Y
                  </div>
                  
                  {/* Animated Slash */}
                  <div className="animate-float-medium bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent filter drop-shadow-2xl">
                    /
                  </div>
                  
                  {/* Animated AI */}
                  <div className="animate-float-fast bg-gradient-to-br from-blue-800 via-purple-500 to-blue-600 bg-clip-text text-transparent filter drop-shadow-2xl">
                    AI
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 right-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <path d="M80 160 Q200 80 320 160" stroke="url(#gradient)" strokeWidth="2" fill="none" opacity="0.3"/>
                <path d="M120 240 Q200 160 280 240" stroke="url(#gradient)" strokeWidth="2" fill="none" opacity="0.2"/>
                <path d="M60 200 Q200 120 340 200" stroke="url(#gradient)" strokeWidth="1.5" fill="none" opacity="0.15"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>

              {/* Additional Visual Elements */}
              <div className="absolute top-16 right-16 w-12 h-12 border-2 border-blue-300/40 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-16 left-16 w-10 h-10 border-2 border-purple-300/40 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
              
              {/* Neural Network Dots */}
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>

              {/* Circuit Pattern */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 w-0.5 h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30"></div>
              <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-0.5 h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(2deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(-2deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-1.5deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </main>
  );
} 