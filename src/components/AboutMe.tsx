import Orbit from './Orbits';
import Termi from './Terminal';

export default function AboutMe() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Heading */}
      <h1 className="text-[#00FF00] text-5xl sm:text-6xl font-bold mb-12 text-center 
                      ">
        About Me
      </h1>

      {/* Content container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Terminal */}
        <div className="flex-1 w-full max-w-md">
          <Termi />
        </div>

        {/* Orbit / Visual */}
        <div className="flex-1 w-full max-w-md">
          <Orbit />
        </div>
      </div>
    </div>
  );
}
