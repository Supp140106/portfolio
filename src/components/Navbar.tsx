import { useState, useEffect } from "react";
import GlassSurface from "./GlassSurface"; // Ensure correct path

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth * 0.6);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth * 0.9);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🧭 Smooth scroll handler
  const handleScrollTo = (id:any) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // offset if your navbar covers part of the section
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <div className="fixed top-[5px] left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <GlassSurface
        width={width}
        height={70}
        borderRadius={50}
        className={`w-full max-w-7xl mx-auto transition-all duration-300 ${
          scrolled
            ? "shadow-2xl bg-white/30 dark:bg-black/40 backdrop-blur-md"
            : "bg-white/10 dark:bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between h-16 items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text tracking-wide drop-shadow-sm">
              Supprit
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="relative text-gray-100 dark:text-gray-200 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 
                  hover:text-white hover:scale-105 hover:bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 opacity-0 hover:opacity-100 blur-md bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg transition duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </GlassSurface>
    </div>
  );
}
