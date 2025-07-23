"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-160px)] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center w-full">
          {/* Left Side - Text Content (60% width) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Main Title - Left Aligned */}
            <div className="text-left space-y-3">
              <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 leading-tight">
                <div>Yale</div>
                <div>Artificial Intelligence</div>
                <div>Association</div>
              </h1>
              <p className="text-lg text-gray-500 font-light">
                An Undergraduate Organization
              </p>
            </div>
            
            {/* Description Section - Left Aligned */}
            <div className="text-left space-y-6">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The Yale AI Association is a student-led organization that brings together undergraduates passionate about artificial intelligence, machine learning, and deep-tech innovation. Our goal is to foster a vibrant,  inclusive community where students can explore cutting-edge AI research, connect with leading experts, and work on ambitious, goal-oriented projects.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Through hands-on workshops and speaker events we aim to make AI education more accessible and dynamic. Recognizing the transformative and far-reaching impact of AI, we aim to engage the wider Yale community in critical conversations about its development and societal implications. By leveraging Yale’s unique academic strengths, we are committed to supporting Yale students as they explore, build, and lead in AI.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Y/AI Text Art (40% width) */}
          <div className="lg:col-span-2 hidden lg:flex justify-center items-center relative">
            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
              {/* Main Y/AI Text Art - Even Larger */}
              <div className="text-center font-mono text-[14rem] font-bold leading-none select-none">
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
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
      `}</style>
    </main>
  );
} 