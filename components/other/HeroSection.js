import Link from "next/link";
import Hero from "./Svg/Hero";
import Arrow from "./Svg/icons/doodleArrow";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse sm:flex-row items-center justify-center h-screen bg-gradient-to-b px-6 sm:px-12 lg:px-20">

      {/* Hero Image */}
      <div className="sm:w-1/2 flex justify-center items-center relative">
        <Hero className="w-32 md:w-48 lg:w-56" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-6 text-center sm:text-left sm:w-1/2 relative">
        <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl text-drip-black leading-tight">
          Drip<span className="text-blue-500">UI</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-700">
          Tailwind CSS Components
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto sm:mx-0">
          DripUI is a collection of free, customizable Tailwind CSS components
          designed to speed up your development process.
        </p>
        <div className="flex justify-center sm:justify-start mt-4">
          <Link href="/docs/how-to-use">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
