import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CARDS = [
    {
        title: "Organic Cotton",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600",
        color: "bg-black text-white",
        delay: "0ms"
    },
    {
        title: "Recycled Paper",
        image: "https://images.unsplash.com/photo-1677064061401-f77f966ff8a1?auto=format&fit=crop&q=80&w=500",
        color: "bg-brand-purple text-white",
        delay: "100ms"
    },
    {
        title: "No Plastic",
        image: "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?auto=format&fit=crop&q=80&w=500",
        color: "bg-brand-orange text-brand-black",
        delay: "200ms"
    },
    {
        title: "Lifetime Use",
        image: "https://images.unsplash.com/photo-1621609764049-5ee1db3d7c35?auto=format&fit=crop&q=80&w=500",
        color: "bg-gray-200 text-brand-black",
        delay: "300ms"
    },
    {
        title: "Fair Trade",
        image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80&w=500",
        color: "bg-brand-green text-white",
        delay: "400ms"
    }
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-0 overflow-hidden bg-brand-cream">
       {/* Background Blur Effect */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] bg-white/40 rounded-full blur-[120px] pointer-events-none -z-10"></div>

       {/* Text Content Area - Centered Top */}
       <div className="flex-grow flex flex-col items-center justify-center text-center px-6 relative z-10 w-full mx-auto max-w-5xl mb-8 md:mb-0">
          
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 mb-6 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
             <Sparkles size={14} className="text-brand-orange" />
             <span className="text-xs font-bold uppercase tracking-widest text-brand-black/70">The Merch Design Studio</span>
          </div>

          <h1 className="opacity-0 animate-fade-up-delay-1 font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 text-brand-black">
            Merch that <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">
                people keep.
            </span>
          </h1>

          <div className="opacity-0 animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mt-4">
            <a href="#contact" className="group px-8 py-4 bg-[#121212] text-white font-bold text-lg rounded-full hover:bg-brand-orange hover:text-brand-black transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 min-w-[220px] justify-center">
              Start your project
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#use-cases" className="px-8 py-4 bg-transparent border border-gray-300 text-brand-black font-bold text-lg rounded-full hover:bg-white hover:border-brand-black transition-all duration-300 shadow-sm hover:shadow-md min-w-[200px] justify-center flex items-center">
              See examples
            </a>
          </div>
       </div>

       {/* Cards Row - Fixed Bottom Placement */}
       <div className="w-full relative z-10 mt-auto">
          
          {/* Desktop/Tablet: Horizontal Row */}
          <div className="hidden md:flex justify-center items-end gap-4 px-6 h-64 lg:h-80 w-full max-w-7xl mx-auto">
            {CARDS.map((card, index) => (
                <div 
                  key={index} 
                  className="relative flex-1 h-full rounded-t-3xl overflow-hidden shadow-xl transition-all duration-300 hover:h-[110%] hover:shadow-2xl group cursor-pointer bg-white opacity-0 animate-fade-up"
                  style={{ animationDelay: card.delay, animationFillMode: 'forwards' }}
                >
                    <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
                    
                    {/* Tag */}
                    <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 ${card.color} text-xs font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap z-20`}>
                        {card.title}
                    </div>
                </div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden w-full overflow-x-auto pb-8 pt-4 px-6 hide-scrollbar">
             <div className="flex gap-4 w-max">
                {CARDS.map((card, index) => (
                    <div 
                      key={index} 
                      className="relative w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl opacity-0 animate-fade-up"
                      style={{ animationDelay: card.delay, animationFillMode: 'forwards' }}
                    >
                        <img 
                            src={card.image} 
                            alt={card.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute bottom-4 left-4 ${card.color} text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                            {card.title}
                        </div>
                    </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};
