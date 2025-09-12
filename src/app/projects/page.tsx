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
              {/* Project Submission Call-to-Action */}
              <div className={`mt-8 p-6 rounded-2xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600/30'
                  : 'bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-blue-200/30'
              }`}>
                <p className={`text-lg mb-6 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Ready to turn your ideas into reality? We&apos;re now accepting project proposals for the upcoming semester. 
                  Whether you have a fully-formed concept or just a spark of curiosity, we&apos;d love to help you bring it to life.
                </p>
                <div className="relative inline-block">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe5vEY6zOWMD27WjcWCJunCdfU_DXuZ6leevE3Lse9DiNQOcg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    <span>Submit Your Project Idea</span>
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
          <div className="hidden md:flex lg:w-1/3 flex-col gap-6">
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


        {/* Current Projects Placeholder */}
        <div className="mt-20">
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
              }`}>Projects coming soon</p>
            </div>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Check back soon to see the exciting projects our community is working on!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Loading Card 1 */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 animate-pulse transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}></div>
              <div className="p-6">
                <div className={`h-6 rounded animate-pulse mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className="space-y-2">
                  <div className={`h-4 rounded animate-pulse transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-3/4 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-1/2 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                </div>
                <div className={`h-4 rounded animate-pulse w-1/3 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className={`h-8 rounded animate-pulse w-24 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
              </div>
            </div>

            {/* Placeholder Loading Card 2 */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 animate-pulse transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}></div>
              <div className="p-6">
                <div className={`h-6 rounded animate-pulse mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className="space-y-2">
                  <div className={`h-4 rounded animate-pulse transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-3/4 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-1/2 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                </div>
                <div className={`h-4 rounded animate-pulse w-1/3 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className={`h-8 rounded animate-pulse w-24 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
              </div>
            </div>

            {/* Placeholder Loading Card 3 */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 animate-pulse transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}></div>
              <div className="p-6">
                <div className={`h-6 rounded animate-pulse mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className="space-y-2">
                  <div className={`h-4 rounded animate-pulse transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-3/4 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-1/2 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                </div>
                <div className={`h-4 rounded animate-pulse w-1/3 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className={`h-8 rounded animate-pulse w-24 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
              </div>
            </div>

            {/* Placeholder Loading Card 4 */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 animate-pulse transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}></div>
              <div className="p-6">
                <div className={`h-6 rounded animate-pulse mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className="space-y-2">
                  <div className={`h-4 rounded animate-pulse transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-3/4 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-1/2 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                </div>
                <div className={`h-4 rounded animate-pulse w-1/3 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className={`h-8 rounded animate-pulse w-24 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
              </div>
            </div>

            {/* Placeholder Loading Card 5 */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 animate-pulse transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}></div>
              <div className="p-6">
                <div className={`h-6 rounded animate-pulse mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className="space-y-2">
                  <div className={`h-4 rounded animate-pulse transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-3/4 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-1/2 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                </div>
                <div className={`h-4 rounded animate-pulse w-1/3 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className={`h-8 rounded animate-pulse w-24 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
              </div>
            </div>

            {/* Placeholder Loading Card 6 */}
            <div className={`backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30'
                : 'bg-white/80 border-gray-200/30'
            }`}>
              <div className={`h-48 animate-pulse transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}></div>
              <div className="p-6">
                <div className={`h-6 rounded animate-pulse mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className="space-y-2">
                  <div className={`h-4 rounded animate-pulse transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-3/4 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-4 rounded animate-pulse w-1/2 transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}></div>
                </div>
                <div className={`h-4 rounded animate-pulse w-1/3 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className={`h-8 rounded animate-pulse w-24 mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 