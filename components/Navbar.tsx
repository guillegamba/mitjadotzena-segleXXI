import React from 'react';
import logoBlack from '../logo_black.png';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-6 py-6">
      <img src={logoBlack} alt="Mitjadotzena logo" className="h-8 w-auto" />
    </nav>
  );
};
