import React from 'react';
import { Send } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto bg-brand-orange rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        {/* Abstract shapes overlay */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 mix-blend-overlay"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-left">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-black mb-6 leading-tight">
              Ready to create merch that matters?
            </h2>
            <p className="text-brand-black/80 text-lg mb-8 leading-relaxed font-medium">
              Tell us about your project. Whether it's a new onboarding pack, event swag, or a full brand collection, we're here to help you do it responsibly.
            </p>
            <div className="flex flex-col gap-4 text-brand-black/80 font-bold">
               <p className="flex items-center gap-3">
                 <span className="w-6 h-6 rounded-full bg-brand-black/10 flex items-center justify-center text-xs">✓</span> 
                 Response within 24 hours
               </p>
               <p className="flex items-center gap-3">
                 <span className="w-6 h-6 rounded-full bg-brand-black/10 flex items-center justify-center text-xs">✓</span> 
                 Curated sustainable catalog
               </p>
               <p className="flex items-center gap-3">
                 <span className="w-6 h-6 rounded-full bg-brand-black/10 flex items-center justify-center text-xs">✓</span> 
                 Free design consultation
               </p>
            </div>
            
            <p className="mt-12 text-brand-black/60 text-sm font-bold">
                Based in Barcelona. Shipping Worldwide.
            </p>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
             <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
                <div className="space-y-5">
                   <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Name</label>
                      <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-black placeholder-gray-300 rounded-t-md" placeholder="Your name" />
                   </div>
                   <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Email</label>
                      <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-black placeholder-gray-300 rounded-t-md" placeholder="you@company.com" />
                   </div>
                   <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2">I'm interested in...</label>
                      <select className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-black rounded-t-md">
                         <option>Onboarding Packs</option>
                         <option>Event Merchandise</option>
                         <option>Employee Gifts</option>
                         <option>General Inquiry</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Message</label>
                      <textarea rows={3} className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-black placeholder-gray-300 rounded-t-md" placeholder="Tell us about your project timeline and quantities..."></textarea>
                   </div>
                   <button type="submit" onClick={(e) => e.preventDefault()} className="w-full py-4 bg-brand-black text-white font-bold rounded-xl hover:bg-brand-green transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Get in Touch <Send size={18} />
                   </button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};