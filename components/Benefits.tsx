import React from 'react';
import { Leaf, Zap, Sparkles } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Not Landfill Fodder",
    description: "We only source high-quality, sustainable materials. No cheap plastics. No 'wear once' t-shirts. Products your team will actually fight over.",
    icon: Leaf,
    colorClass: "bg-red-100 text-red-600"
  },
  {
    title: "Design is in our DNA",
    description: "We are a creative studio first. We ensure your brand guidelines are respected and elevated. Every item feels like a retail product.",
    icon: Sparkles,
    colorClass: "bg-purple-100 text-purple-600"
  },
  {
    title: "Stress-Free Execution",
    description: "From concept to doorstep. We handle sourcing, production, quality control, and logistics. You approve designs, we do the rest.",
    icon: Zap,
    colorClass: "bg-amber-100 text-amber-600"
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
            Stop making merch <br/>that ends up in the trash.
          </h2>
          <p className="text-lg text-gray-600">
            Most corporate merchandise is wasteful, generic, and uninspired. 
            Mitjadotzena brings the agency touch to physical branding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};