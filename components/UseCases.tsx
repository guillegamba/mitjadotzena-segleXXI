import React, { useState } from 'react';
import { SmilePlus, Gem, PartyPopper } from 'lucide-react';
import { UseCaseProps } from '../types';

const cases: UseCaseProps[] = [
  {
    title: "Onboarding Packs",
    description: "First impressions matter. Welcome your new talent with a curated box of essentials they'll use every day. Think organic cotton hoodies, premium notebooks, and durable tech accessories.",
    outcome: "Increase employee retention and belonging from Day 1.",
    ctaText: "Design your welcome pack",
    image: "https://images.unsplash.com/photo-1593987157640-5e87cc558064?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Employee Experience",
    description: "Celebrate milestones, work anniversaries, or company retreats with gifts that reflect your culture. Move beyond the generic mug.",
    outcome: "Boost team morale with thoughtful, quality gear.",
    ctaText: "Shop employee gifts",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Event Merchandise",
    description: "Hosting a summit or hackathon? Give attendees something they won't leave in the hotel room. Sustainable, stylish, and memorable.",
    outcome: "Extend your brand visibility long after the event ends.",
    ctaText: "Plan event merch",
    image: "https://images.unsplash.com/photo-1505373877841-8d43f703fb8f?auto=format&fit=crop&q=80&w=800"
  }
];

export const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Mapping icons to cases by index: 
  // 0: SmilePlus (Smile with a plus)
  // 1: Gem (Ring/Jewelry for Anniversaries/Experience)
  // 2: PartyPopper (Balloon/Celebration for Events)
  const icons = [SmilePlus, Gem, PartyPopper];

  return (
    <section id="use-cases" className="py-24 bg-brand-black text-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Navigation */}
          <div className="md:w-1/3">
            <h2 className="font-display font-bold text-4xl mb-8 text-white">
              Who is this for?
            </h2>
            <div className="space-y-4">
              {cases.map((c, idx) => {
                const Icon = icons[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      activeTab === idx 
                        ? 'bg-brand-orange text-brand-black shadow-lg scale-105' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="font-display font-bold text-lg">{c.title}</span>
                    {activeTab === idx && <Icon size={20} strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:w-2/3">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden bg-white/10 border border-white/10 p-1">
               {cases.map((c, idx) => (
                 <div 
                   key={idx}
                   className={`absolute inset-0 transition-opacity duration-500 flex flex-col ${
                     activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                   }`}
                 >
                   {/* Image Top Half */}
                   <div className="h-1/2 w-full relative overflow-hidden rounded-t-xl">
                      <img 
                        src={c.image} 
                        alt={c.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   </div>
                   
                   {/* Content Bottom Half */}
                   <div className="h-1/2 p-8 md:p-12 flex flex-col justify-center bg-zinc-900 rounded-b-xl">
                      <h3 className="text-2xl font-display font-bold mb-4 text-white">{c.outcome}</h3>
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        {c.description}
                      </p>
                      <div>
                        <button className="text-brand-orange font-bold text-lg hover:text-white transition-colors flex items-center gap-2 group">
                          {c.ctaText}
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};