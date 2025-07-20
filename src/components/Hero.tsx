import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] space-y-8 max-w-4xl mx-auto px-6">
      {/* Hero Section */}
      <div className="space-y-8">
        {/* Main Title - Centered */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
            Yale AI Association
          </h1>
          <p className="text-lg text-gray-500 font-light">
            An Undergraduate Organization
          </p>
        </div>
        
        {/* Description Section - Left Aligned */}
        <div className="text-left space-y-6 max-w-3xl">
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The Yale AI Association brings together undergraduate students passionate about artificial intelligence, machine learning, and cutting-edge technology. We foster a collaborative environment where students can explore AI research, participate in hands-on projects, and connect with industry leaders.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              From organizing workshops and hackathons to facilitating research opportunities and industry partnerships, we're committed to advancing AI education and creating meaningful impact in the field of artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 