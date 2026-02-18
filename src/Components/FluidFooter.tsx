import React from 'react';

const FluidFooter: React.FC = () => {
  return (
    <footer className="relative w-full mt-auto">
      {/* Wave Container */}
      <div className="relative w-full h-[100px] md:h-[15vh] min-h-[100px] max-h-[150px] overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g>
            {/* Layer 1: Highest transparency, slowest */}
            <use 
              href="#gentle-wave" 
              x="48" y="0" 
              className="fill-purple-400/30 animate-wave-slow" 
              style={{ animationDelay: '-2s' }}
            />
            {/* Layer 2: Mid transparency, medium speed */}
            <use 
              href="#gentle-wave" 
              x="48" y="3" 
              className="fill-purple-400/50 animate-wave-medium" 
              style={{ animationDelay: '-3s' }}
            />
            {/* Layer 3: Lower transparency, faster */}
            <use 
              href="#gentle-wave" 
              x="48" y="5" 
              className="fill-purple-400/70 animate-wave-fast" 
              style={{ animationDelay: '-4s' }}
            />
            {/* Layer 4: Solid Purple base layer */}
            <use 
              href="#gentle-wave" 
              x="48" y="7" 
              className="fill-purple-700 animate-wave-slow" 
              style={{ animationDuration: '20s' }}
            />
          </g>
        </svg>
      </div>

      {/* Footer Content - Matches the solid wave color */}
      <div className="bg-purple-700 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight">Fluid Motion</h2>
            <p className="text-purple-200 mt-2">Smooth waves for a modern UI.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Services</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Contact</a>
          </div>

          <div className="text-sm text-purple-300">
            © {new Date().getFullYear()} Brand. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FluidFooter;