import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-gray-800 pb-16">
          
          {/* Brand */}
          <div className="md:w-1/2">
            <img 
              src="/logo_black.png" 
              alt="Mitjadotzena" 
              className="h-10 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-gray-400 max-w-sm text-lg">
              The creative studio for conscious merchandise. <br/>
              Designed in Barcelona, made responsibly for the world.
            </p>
          </div>

          {/* Social Links Only */}
          <div className="md:w-1/2 flex flex-col md:items-end gap-6">
            <h4 className="font-bold text-brand-orange">Connect with us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mitjadotzena Studio S.L.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};