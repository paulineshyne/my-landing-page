import { useState } from 'react';

// Imports from previous interactive template
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';

// Component imports for the landing page
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  // State from previous code
  const [count, setCount] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Fixed Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Interactive Demo Section (Merged from Previous Code) */}
        <section id="demo" className="py-12 px-6 bg-slate-900/50 border-y border-slate-800 flex flex-col items-center text-center">
          <div className="max-w-2xl w-full space-y-6">
            
            {/* Logos */}
            <div className="flex items-center justify-center space-x-6">
              {heroImg && (
                <img src={heroImg} className="w-14 h-14 object-contain" alt="Hero" />
              )}
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="w-12 h-12 hover:scale-110 transition-transform" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="w-12 h-12 hover:scale-110 transition-transform" alt="React logo" />
              </a>
            </div>

            {/* Section Info */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400">
                Interactive Playground
              </h2>
              <p className="text-slate-300 mt-2 text-sm">
                Test state updates and view resource links below.
              </p>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button
                type="button"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-400 font-semibold px-5 py-2 rounded-lg shadow transition"
                onClick={() => setCount((count) => count + 1)}
              >
                Count is {count}
              </button>

              <button
                type="button"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2 rounded-lg shadow-lg transition active:scale-95"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? 'Hide Resources ▲' : 'Show Resources ▼'}
              </button>
            </div>

            {/* Toggleable Resources Container */}
            {showDetails && (
              <div id="next-steps" className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-800 text-left">
                
                {/* Documentation Card */}
                <div id="docs" className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <img src={viteLogo} className="w-5 h-5" alt="Icon" />
                    <h3 className="text-lg font-bold text-white">Documentation</h3>
                  </div>
                  <p className="text-slate-400 text-xs">Your questions, answered</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 p-2 bg-slate-900/50 hover:bg-slate-700/50 rounded-lg transition text-slate-200">
                        <img className="w-4 h-4" src={viteLogo} alt="" />
                        <span>Explore Vite</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://react.dev/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 p-2 bg-slate-900/50 hover:bg-slate-700/50 rounded-lg transition text-slate-200">
                        <img className="w-4 h-4" src={reactLogo} alt="" />
                        <span>Learn React</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Card */}
                <div id="social" className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <img src={reactLogo} className="w-5 h-5" alt="Icon" />
                    <h3 className="text-lg font-bold text-white">Connect with us</h3>
                  </div>
                  <p className="text-slate-400 text-xs">Join the Vite community</p>
                  <ul className="grid grid-cols-2 gap-2 text-xs">
                    <li>
                      <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer" className="block p-2 bg-slate-900/50 hover:bg-slate-700/50 rounded-lg transition text-slate-200 text-center">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer" className="block p-2 bg-slate-900/50 hover:bg-slate-700/50 rounded-lg transition text-slate-200 text-center">
                        Discord
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/vite_js" target="_blank" rel="noreferrer" className="block p-2 bg-slate-900/50 hover:bg-slate-700/50 rounded-lg transition text-slate-200 text-center">
                        X.com
                      </a>
                    </li>
                    <li>
                      <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer" className="block p-2 bg-slate-900/50 hover:bg-slate-700/50 rounded-lg transition text-slate-200 text-center">
                        Bluesky
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            )}
          </div>
        </section>

        {/* Activity Sections */}
        <Features />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm border-t border-slate-900">
        © {new Date().getFullYear()} CCIT-06 Activity 1. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}