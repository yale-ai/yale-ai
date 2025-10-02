'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Projects() {
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
              <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
              </h1>
              <div className="flex items-center space-x-3 mb-6">
                <p className={`text-lg font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                }`}>Creative and technically-grounded projects </p>
              </div>
            </div>
            
            <div className={`space-y-6 text-lg leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              
              <p>
                At Yale AI, projects are a key part of how we learn and build together. 
                We aim to unleash the creativity of our members by hosting projects that span diverse areas related to AI: 
                from applications of deep learning, LLMs, and robotics to AI-enabled science and AI ethics. To support these efforts, 
                we provide access to computing clusters, API credits, and general funding, along with guidance in finding collaborators and 
                technical advisors.
              </p>

              <p>
                Through projects, we hope to give students the resources, flexibility, and support to pursue 
                their interests while also gaining practical experience that complements their coursework and lab research. 
                From small exploratory ideas to large-scale initiatives, our projects create a collaborative environment where 
                students can apply theoretical knowledge, strengthen technical skills, and work on something they&apos;re genuinely excited about.
              </p>

              {/* Project Interest Form */}
              <div className={`mt-8 p-6 rounded-2xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600/30'
                  : 'bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-blue-200/30'
              }`}>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Interested in Joining a Project?
                </h3>
                <p className={`text-lg mb-6 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Ready to dive into one of our active projects? Express your interest and connect with project leads 
                  to learn more about getting involved.
                </p>
                <div className="relative inline-block">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdT4b0jo_9f7RjQmpKtHpuA_Yiqdv-afG3YQjrriTzvcDXNlA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    <span>Express Interest</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  
                  {/* Minimal particle animations */}
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.8s'}}></div>
                  <div className="absolute top-1/2 -right-2 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '1.2s'}}></div>
                  <div className="absolute top-1/2 -left-2 w-0.5 h-0.5 bg-purple-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Decorative Elements */}
          <div className="hidden md:flex lg:w-1/3 flex-col justify-between">
            {/* Top Section - Scroll Button and First Card */}
            <div className="space-y-6">
              {/* Scroll Down Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('current-projects');
                    if (element) {
                      const headerHeight = 80; // Approximate header height
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`group relative inline-flex items-center px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-600/30 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                      : 'bg-white/50 border-gray-200/30 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {/* Live Indicator */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-500 rounded-full animate-pulse">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  <span className="mr-2 font-medium">4 Active Projects</span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                </button>
              </div>
              
            <div className={`w-full h-48 rounded-3xl flex items-center justify-center border relative overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600/30'
                : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-blue-200/30'
            }`}>
              <div className={`absolute inset-0 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-700/30 to-gray-600/30'
                  : 'bg-gradient-to-br from-blue-50/30 to-purple-50/30'
              }`}></div>
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
              <div className={`w-1/2 h-32 rounded-3xl flex items-center justify-center border relative overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600/30'
                  : 'bg-gradient-to-br from-green-100/50 to-blue-100/50 border-green-200/30'
              }`}>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-700/30 to-gray-600/30'
                    : 'bg-gradient-to-br from-green-50/30 to-blue-50/30'
                }`}></div>
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              
              <div className={`w-1/2 h-32 rounded-3xl flex items-center justify-center border relative overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600/30'
                  : 'bg-gradient-to-br from-purple-100/50 to-pink-100/50 border-purple-200/30'
              }`}>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-700/30 to-gray-600/30'
                    : 'bg-gradient-to-br from-purple-50/30 to-pink-50/30'
                }`}></div>
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Bottom Section - Star Icon Rectangle */}
            <div className={`w-full h-64 rounded-3xl flex items-center justify-center border relative overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800/50 via-gray-700/50 to-gray-600/50 border-gray-600/30'
                : 'bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-cyan-100/50 border-blue-200/30'
            }`}>
              <div className={`absolute inset-0 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-700/30 via-gray-600/30 to-gray-500/30'
                  : 'bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-cyan-50/30'
              }`}></div>
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


        {/* Current Projects */}
        <div id="current-projects" className="mt-20">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Current{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <p className={`text-lg font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
              }`}>Active research and development initiatives</p>
            </div>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore our diverse range of projects spanning financial AI, neuroscience research, and cutting-edge language models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Stock Trading Bots */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                  <h3 className="text-white font-semibold text-lg">Financial Trading</h3>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Financial Stock Trading Bots
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Explore how NLP models can be applied to market sentiment, news analysis, and automated trading strategies. 
                    Learn financial data APIs, backtesting, and language-driven decision-making.
                  </p>
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">KV</span>
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>Kalista Villatoro</p>
                      <p className={`text-xs transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Project Lead</p>
                    </div>
                  </div>
                  <a
                    href="mailto:kalista.villatoro@yale.edu"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Neuroscience + AI Paper Reading Group */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  <h3 className="text-white font-semibold text-lg">Neuroscience</h3>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Neuroscience + AI Paper Reading Group
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Biweekly discussions on neuroscience-inspired AI, exploring neural coding, predictive coding, 
                    reinforcement learning in the brain, and cognitive maps.
                  </p>
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AS</span>
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>Anika Shethia</p>
                      <p className={`text-xs transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Project Lead</p>
                    </div>
                  </div>
                  <a
                    href="mailto:anika.shethia@yale.edu"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Frontier AI Weekly Discussion Group */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <h3 className="text-white font-semibold text-lg">Frontier AI</h3>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Frontier AI Weekly Discussion Group
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Advanced-level discussions on the latest models, frameworks, and AGI debates. 
                    Weekly sessions exploring new trends in AI with rotating group leaders.
                  </p>
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">?</span>
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>TBD</p>
                      <p className={`text-xs transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Project Lead</p>
              </div>
            </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              theme === 'dark'
                      ? 'bg-gray-800 text-gray-400'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    Seeking Lead
                  </div>
                </div>
              </div>
            </div>

            {/* LLM Hands-On Applications Project */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  <h3 className="text-white font-semibold text-lg">LLM Applications</h3>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    LLM Hands-On Applications Project
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Building systems for natural language interaction with unstructured data. 
                    Explore finetuning, RAG, MCP automation, and knowledge graphs.
                  </p>
                </div>
                <div className="mt-auto pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">JC</span>
                      </div>
                      <div>
                        <p className={`text-sm font-medium transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>Jaden Cohen</p>
                        <p className={`text-xs transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>Co-Lead</p>
                      </div>
                    </div>
                    <a
                      href="mailto:jaden.cohen@yale.edu"
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                    >
                      Contact
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">DA</span>
                      </div>
                      <div>
                        <p className={`text-sm font-medium transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>David Antwi</p>
                        <p className={`text-xs transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>Co-Lead</p>
              </div>
            </div>
                    <a
                      href="mailto:david.antwi@yale.edu"
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Your Project Idea */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                  </svg>
                  <h3 className="text-white font-semibold text-lg">More to Come</h3>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Submit Your Project Idea
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    If you have a collaborative project idea, or need technical support for an ambitious idea, 
                    our project form remains open and will be monitored on a rolling basis.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <a
                    href="https://forms.gle/BBPjhvF7LNa4QnUb9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 hover:shadow-lg'
                        : 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 hover:shadow-lg'
                    }`}
                  >
                    <span className="mr-2">Submit Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 