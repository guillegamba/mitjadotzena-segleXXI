import React from 'react';

export const SocialProof: React.FC = () => {
  // Using text placeholders for logos for simplicity, styled to look like logos
  const brands = ["Spotify", "Typeform", "TravelPerk", "Glovo", "Heura", "Factorial"];

  return (
    <section className="py-12 border-y border-gray-200 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by bold teams in Barcelona & beyond
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {brands.map((brand, i) => (
             <span key={i} className="text-2xl md:text-3xl font-display font-bold text-gray-800 hover:text-brand-black cursor-default">
               {brand}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};