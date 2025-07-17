import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
            Yale AI Association
          </h1>
          <p className="text-lg text-gray-500 font-light">
            An Undergraduate Organization
          </p>
        </div>
      </div>
    </main>
  );
} 