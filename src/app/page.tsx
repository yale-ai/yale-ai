import Image from "next/image";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import GetInvolved from "@/components/GetInvolved";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-8">
        <Hero />
      </div>
      <Activities />
      <GetInvolved />
    </div>
  );
}
