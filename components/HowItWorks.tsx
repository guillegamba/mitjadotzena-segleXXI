import React from 'react';
import { PenTool, Package, Truck } from 'lucide-react';
import { StepProps } from '../types';

const steps: StepProps[] = [
  {
    number: "01",
    title: "Brief & Sustainable Concept",
    description: "We start by understanding your brand and values. We propose a curated selection of eco-conscious products that match your aesthetic and budget."
  },
  {
    number: "02",
    title: "Design & Responsible Production",
    description: "Our studio creates custom designs that pop. We then manufacture using certified sustainable partners (GOTS, Recycled, Fair Trade) in Europe."
  },
  {
    number: "03",
    title: "Delivery & Unboxing Experience",
    description: "We handle kitting, fulfillment, and worldwide shipping. Your team receives a plastic-free package that feels like a gift, not corporate swag."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-green font-bold uppercase tracking-widest text-sm">The Process</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6">Simple. Transparent. <br/>Conscious.</h2>
          <p className="max-w-xl mx-auto text-gray-600">
            We've streamlined the merch process so you can focus on your team, while we handle the heavy lifting and the eco-credentials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-sm">
                <span className="font-display font-bold text-3xl text-brand-orange">{step.number}</span>
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-black">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};