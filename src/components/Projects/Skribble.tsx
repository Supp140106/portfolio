import React from "react";

const Skribble: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 border-b-2 border-gray-600 pb-2">
        Skribble.io
      </h2>

      <div className="w-full max-w-5xl aspect-[16/9] border-4 border-gray-700 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300">
        <iframe
          src="https://skrible-pi.vercel.app/"
          title="TaxBuddy Project"
          className="w-full h-full"
          frameBorder="0"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default Skribble;
