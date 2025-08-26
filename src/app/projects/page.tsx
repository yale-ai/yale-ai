export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
              </h1>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-lg text-gray-500 font-medium">Cutting-edge AI Research & Innovation</p>
              </div>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                At Yale AI Club, we believe in learning through hands-on experience. Our projects 
                span across various domains of artificial intelligence, from computer vision and 
                natural language processing to machine learning research and AI ethics. Students 
                collaborate on cutting-edge research, develop practical applications, and explore 
                the societal implications of AI technology.
              </p>
              
              <p>
                Our project teams work closely with faculty mentors and industry professionals 
                to tackle real-world challenges. Whether you&apos;re interested in building AI models, 
                conducting research, or exploring AI policy, our diverse project portfolio offers 
                opportunities for students at all levels to contribute meaningfully to the field.
              </p>
              
              <p>
                From semester-long research initiatives to hackathon-style sprints, our projects 
                provide a collaborative environment where students can apply theoretical knowledge, 
                develop technical skills, and make lasting contributions to the AI community.
              </p>
            </div>
          </div>

          {/* Right Decorative Elements */}
          <div className="hidden md:flex lg:w-1/3 flex-col gap-6">
            <div className="w-full h-48 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-3xl flex items-center justify-center border border-blue-200/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm7 13H5v-2.5c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5V19z"/>
                </svg>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 h-32 bg-gradient-to-br from-green-100/50 to-blue-100/50 rounded-3xl flex items-center justify-center border border-green-200/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30"></div>
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              
              <div className="w-1/2 h-32 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-3xl flex items-center justify-center border border-purple-200/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30"></div>
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <div className="w-full h-64 bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-cyan-100/50 rounded-3xl flex items-center justify-center border border-blue-200/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-cyan-50/30"></div>
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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

        {/* Projects Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-lg text-gray-500 font-medium">Our exciting AI projects are currently in development and will be launching soon!</p>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Check back in the next few weeks to see our cutting-edge research initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* COMMENTED OUT - Original Project Card 1 */}
            {/*
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/30">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Coming Soon</p>
                </div>
                
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Title
                </h3>
                <p className="text-gray-600 mb-4">
                  Short description of the project.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
<<<<<<< Updated upstream
                  Fall 2025 - Present
=======
                  Launching Soon
>>>>>>> Stashed changes
                </div>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors group" disabled>
                  Coming Soon 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
            */}

            {/* COMMENTED OUT - Original Project Card 2 */}
            {/*
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/30">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Coming Soon</p>
                </div>
                
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Title
                </h3>
                <p className="text-gray-600 mb-4">
                  Short description of the project.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
<<<<<<< Updated upstream
                  Fall 2025 - Present
=======
                  Launching Soon
>>>>>>> Stashed changes
                </div>
                <button className="text-green-600 font-medium hover:text-green-700 transition-colors group" disabled>
                  Coming Soon 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
            */}

            {/* COMMENTED OUT - Original Project Card 3 */}
            {/*
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/30">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Coming Soon</p>
                </div>
                
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Title
                </h3>
                <p className="text-gray-600 mb-4">
                  Short description of the project.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
<<<<<<< Updated upstream
                  Fall 2025 - Present
=======
                  Launching Soon
>>>>>>> Stashed changes
                </div>
                <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors group" disabled>
                  Coming Soon 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
            */}

            {/* COMMENTED OUT - Original Project Card 4 */}
            {/*
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/30">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Coming Soon</p>
                </div>
                
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Title
                </h3>
                <p className="text-gray-600 mb-4">
                  Short description of the project.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
<<<<<<< Updated upstream
                  Fall 2025 - Present
=======
                  Launching Soon
>>>>>>> Stashed changes
                </div>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors group" disabled>
                  Coming Soon 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
            */}

            {/* COMMENTED OUT - Original Project Card 5 */}
            {/*
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/30">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Coming Soon</p>
                </div>
                
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Title
                </h3>
                <p className="text-gray-600 mb-4">
                  Short description of the project.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
<<<<<<< Updated upstream
                  Fall 2025 - Present
=======
                  Launching Soon
>>>>>>> Stashed changes
                </div>
                <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors group" disabled>
                  Coming Soon 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
            */}

            {/* COMMENTED OUT - Original Project Card 6 */}
            {/*
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/30">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Coming Soon</p>
                </div>
                
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Title
                </h3>
                <p className="text-gray-600 mb-4">
                  Short description of the project.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
<<<<<<< Updated upstream
                  Fall 2025 - Present
=======
                  Launching Soon
>>>>>>> Stashed changes
                </div>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors group" disabled>
                  Coming Soon 
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
            */}

            {/* Placeholder Loading Card 1 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-200/30">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3 mt-4"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-24 mt-4"></div>
              </div>
            </div>

            {/* Placeholder Loading Card 2 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-200/30">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3 mt-4"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-24 mt-4"></div>
              </div>
            </div>

            {/* Placeholder Loading Card 3 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-200/30">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3 mt-4"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-24 mt-4"></div>
              </div>
            </div>

            {/* Placeholder Loading Card 4 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-200/30">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3 mt-4"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-24 mt-4"></div>
              </div>
            </div>

            {/* Placeholder Loading Card 5 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-200/30">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3 mt-4"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-24 mt-4"></div>
              </div>
            </div>

            {/* Placeholder Loading Card 6 */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-gray-200/30">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3 mt-4"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-24 mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 