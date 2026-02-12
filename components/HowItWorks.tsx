import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Brief & Concept",
    description: "We start by understanding your brand values. We propose a curated selection of eco-conscious products that match your aesthetic and budget.",
    gradientClass: "from-white via-white to-brand-orange/20",
    numberColor: "text-brand-orange"
  },
  {
    number: "02",
    title: "Design & Production",
    description: "Our studio creates custom designs that pop. We then manufacture using certified sustainable partners (GOTS, Recycled, Fair Trade) in Europe.",
    gradientClass: "from-white via-white to-brand-purple/20",
    numberColor: "text-brand-purple"
  },
  {
    number: "03",
    title: "Delivery & Experience",
    description: "We handle kitting, fulfillment, and worldwide shipping. Your team receives a plastic-free package that feels like a gift, not corporate swag.",
    gradientClass: "from-white via-white to-brand-green/20",
    numberColor: "text-brand-green"
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-brand-cream rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-black/50 font-bold uppercase tracking-[0.2em] text-sm">The Process</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl mt-4 mb-6 text-brand-black">
            Simple. Transparent. <br/>
            <span className="text-brand-orange">Conscious.</span>
          </h2>
          <p className="max-w-xl mx-auto text-xl text-gray-500 font-light">
            We've streamlined the merch process so you can focus on your team, while we handle the heavy lifting and the eco-credentials.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) - visible between cards */}
          <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              return (
                <div key={index} className="group relative z-10">
                  {/* Card Container */}
                  <div className={`h-full bg-white rounded-3xl p-10 border border-gray-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col relative overflow-hidden`}>
                    
                    {/* Hover Gradient Layer */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <span className={`font-display font-bold text-6xl mb-8 block ${step.numberColor} opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 origin-left`}>
                            {step.number}
                        </span>

                        <h3 className="font-display font-bold text-2xl mb-4 text-brand-black relative">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-500 leading-relaxed">
                          {step.description}
                        </p>
                    </div>
                  </div>
                  
                  {/* Mobile Connector Arrow (visible only on mobile between steps) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center py-6 text-gray-300">
                      <ArrowRight className="rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};