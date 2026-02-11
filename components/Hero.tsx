import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-brand-cream">
      {/* Background Gradient Circle - Matches screenshot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] bg-[#F3E6E2] rounded-full blur-[60px] opacity-60 pointer-events-none -z-10"></div>

      {/* Floating Images - Desktop Only - Positioned relative to viewport */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
           
           {/* Item 1: Top Left - Organic Cotton */}
           <div className="absolute top-[10%] left-[2%] xl:left-[5%] w-72 animate-float pointer-events-auto cursor-pointer group hover:z-50">
             <div className="relative bg-white p-4 shadow-2xl rounded-2xl transition-transform duration-500 hover:scale-105">
                <div className="overflow-hidden rounded-xl bg-gray-50 aspect-square">
                  <img src="https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&q=80&w=600" alt="Organic Cotton" className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"/>
                </div>
                {/* Tag: Black, Bottom Right */}
                <div className="absolute -bottom-4 -right-4 bg-black text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg border border-white/20">
                  Organic Cotton
                </div>
             </div>
           </div>

           {/* Item 2: Top Right - Notebook */}
           <div className="absolute top-[12%] right-[2%] xl:right-[5%] w-64 animate-float-delayed pointer-events-auto cursor-pointer group hover:z-50">
             <div className="relative bg-white p-3 shadow-xl rounded-xl transition-transform duration-500 hover:scale-105">
                <div className="overflow-hidden rounded-lg aspect-[4/5]">
                  <img src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400" alt="Notebook" className="w-full h-full object-cover"/>
                </div>
                {/* Tag: Purple, Top Left */}
                <div className="absolute -top-3 -left-4 bg-[#9D4EDD] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                  Recycled Paper
                </div>
             </div>
           </div>

           {/* Item 3: Bottom Left - Cap/Bottle */}
           <div className="absolute bottom-[5%] left-[5%] xl:left-[8%] w-60 animate-float-slow pointer-events-auto cursor-pointer group hover:z-50">
             <div className="relative bg-white p-3 shadow-xl rounded-xl transition-transform duration-500 hover:scale-105">
                <div className="overflow-hidden rounded-lg aspect-[4/3]">
                   <img src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=500" alt="Cap" className="w-full h-full object-cover"/>
                </div>
                {/* Tag: Orange, Top Right */}
                <div className="absolute -top-3 -right-3 bg-brand-orange text-brand-black text-xs font-bold px-4 py-2 rounded-full shadow-md">
                  No Plastic
                </div>
             </div>
           </div>

            {/* Item 4: Bottom Right - Lifetime Use */}
           <div className="absolute bottom-[8%] right-[5%] xl:right-[8%] w-56 animate-float pointer-events-auto cursor-pointer group hover:z-50">
             <div className="relative bg-white p-4 shadow-xl rounded-xl transition-transform duration-500 hover:scale-105">
                <div className="overflow-hidden rounded-lg bg-gray-50 aspect-square flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
                </div>
                {/* Tag: Grey, Bottom Center inside */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#E5E7EB] text-brand-black text-xs font-bold px-4 py-1.5 rounded-full shadow-sm w-max">
                  Lifetime Use
                </div>
             </div>
           </div>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center h-full flex flex-col justify-center">
        
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center relative z-20">
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 mb-6">
             <Sparkles size={16} className="text-[#F4C5B6]" />
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">The Merch Design Studio</span>
          </div>

          <h1 className="opacity-0 animate-fade-up-delay-1 font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 text-brand-black">
            Merch that <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">people keep.</span>
            </span>
          </h1>

          <p className="opacity-0 animate-fade-up-delay-2 text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed mx-auto">
            We help modern teams build culture with responsible, design-led gear. 
            <span className="hidden md:inline"> Goodbye landfill, hello brand love.</span>
          </p>

          <div className="opacity-0 animate-fade-up-delay-2 flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center justify-center mb-12">
            <a href="#contact" className="group px-8 py-4 bg-brand-black text-white font-bold text-lg rounded-full hover:bg-brand-orange hover:text-brand-black transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Start your project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#use-cases" className="px-8 py-4 bg-transparent border border-gray-300 text-brand-black font-bold text-lg rounded-full hover:bg-white hover:border-transparent transition-all shadow-sm hover:shadow-md">
              See examples
            </a>
          </div>

          {/* Mobile Images Grid - Visible only on mobile/tablet */}
          <div className="lg:hidden w-full max-w-md grid grid-cols-2 gap-4 px-2 animate-fade-up-delay-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
             {/* Mobile Item 1: Organic Cotton */}
             <div className="bg-white p-3 shadow-lg rounded-xl">
                <div className="overflow-hidden rounded-lg bg-gray-50 aspect-square mb-2">
                  <img src="https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&q=80&w=400" alt="Organic Cotton" className="w-full h-full object-cover mix-blend-multiply opacity-90"/>
                </div>
                <div className="text-center">
                   <span className="text-[10px] font-bold bg-black text-white px-2 py-1 rounded-full inline-block">Organic Cotton</span>
                </div>
             </div>

             {/* Mobile Item 2: Recycled Paper */}
             <div className="bg-white p-3 shadow-lg rounded-xl">
                <div className="overflow-hidden rounded-lg aspect-square mb-2">
                  <img src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400" alt="Notebook" className="w-full h-full object-cover"/>
                </div>
                <div className="text-center">
                   <span className="text-[10px] font-bold bg-[#9D4EDD] text-white px-2 py-1 rounded-full inline-block">Recycled Paper</span>
                </div>
             </div>

             {/* Mobile Item 3: No Plastic */}
             <div className="bg-white p-3 shadow-lg rounded-xl">
                <div className="overflow-hidden rounded-lg aspect-square mb-2">
                   <img src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400" alt="Cap" className="w-full h-full object-cover"/>
                </div>
                <div className="text-center">
                   <span className="text-[10px] font-bold bg-brand-orange text-brand-black px-2 py-1 rounded-full inline-block">No Plastic</span>
                </div>
             </div>

             {/* Mobile Item 4: Lifetime Use */}
             <div className="bg-white p-3 shadow-lg rounded-xl">
                <div className="overflow-hidden rounded-lg bg-gray-50 aspect-square flex items-center justify-center mb-2">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
                </div>
                <div className="text-center">
                   <span className="text-[10px] font-bold bg-[#E5E7EB] text-brand-black px-2 py-1 rounded-full inline-block">Lifetime Use</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};