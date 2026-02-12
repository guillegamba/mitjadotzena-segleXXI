import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export const CTASection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Onboarding Packs',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ----------------------------------------------------------------------
    // NOTE: To actually send emails, you need a backend or a service like Formspree.
    // Example implementation with Formspree:
    //
    // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData)
    // });
    //
    // For now, we simulate a successful submission.
    // ----------------------------------------------------------------------

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: '', email: '', interest: 'Onboarding Packs', message: '' });
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Contact Form Container */}
          <div className="lg:w-1/2 w-full">
             <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl min-h-[520px] flex flex-col justify-center transition-all duration-300">
                {isSuccess ? (
                  <div className="flex flex-col items-center text-center animate-fade-up px-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-3xl mb-4 text-brand-black">Message Sent!</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      Thanks! We've received your message and will get back to you ASAP.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 bg-brand-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in">
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-black placeholder-gray-300 rounded-t-md" 
                          placeholder="Your name" 
                        />
                     </div>
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-black placeholder-gray-300 rounded-t-md" 
                          placeholder="you@company.com" 
                        />
                     </div>
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2">I'm interested in...</label>
                        <select 
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-black rounded-t-md"
                        >
                           <option>Onboarding Packs</option>
                           <option>Event Merchandise</option>
                           <option>Employee Gifts</option>
                           <option>General Inquiry</option>
                        </select>
                     </div>
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={3} 
                          className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-black placeholder-gray-300 rounded-t-md" 
                          placeholder="Tell us about your project timeline and quantities..."
                        ></textarea>
                     </div>
                     <button 
                       type="submit" 
                       disabled={isSubmitting}
                       className="w-full py-4 bg-brand-black text-white font-bold rounded-xl hover:bg-brand-green transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                     >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin" size={18} /> Sending...
                          </>
                        ) : (
                          <>
                            Get in Touch <Send size={18} />
                          </>
                        )}
                     </button>
                  </form>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};