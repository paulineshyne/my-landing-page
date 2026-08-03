import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-cyan-400">
          DevLanding
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-slate-300 font-medium">
          <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#features" className="hover:text-cyan-400 transition">Features</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-800 flex flex-col space-y-3 text-slate-300">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Home</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Features</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Contact</a>
        </div>
      )}
    </nav>
  );
}