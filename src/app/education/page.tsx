export default function Education() {
  const educationOptions = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      title: 'Introduction to AI',
      description: 'Perfect for beginners, this program covers fundamental AI concepts, machine learning basics, and hands-on coding experience with popular frameworks.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: 'Advanced Workshops',
      description: 'Deep dive into cutting-edge AI research, advanced neural architectures, and real-world applications with industry experts and researchers.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Education{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
            </h1>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-lg text-gray-500 font-medium">Comprehensive AI Learning Experience</p>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Our education programs are designed to cater to students at all levels of AI expertise. 
                Whether you're just starting your journey in artificial intelligence or looking to advance 
                your existing knowledge, we have programs tailored to help you succeed.
              </p>
              
              <p>
                Through hands-on workshops, collaborative projects, and expert guidance, we provide 
                comprehensive learning experiences that bridge theory and practice.
              </p>
            </div>

            {/* Education Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {educationOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/30 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">
                        {option.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Decorative Elements */}
          <div className="lg:w-1/3 flex flex-col gap-6">
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
      </div>
    </div>
  );
} 