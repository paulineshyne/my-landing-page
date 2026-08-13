import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Temples', path: '/temples' },
    { name: 'Cuisine', path: '/cuisine' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-stone-50 border-b border-stone-200 shadow-sm">
      {/* Thai temple roof-inspired decorative top edge */}
      <div className="h-1.5 bg-stone-800 flex">
        <div className="flex-1 bg-stone-800" />
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[8px] border-t-stone-800 mx-1" />
        <div className="flex-1 bg-stone-800" />
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[8px] border-t-stone-800 mx-1" />
        <div className="flex-1 bg-stone-800" />
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[8px] border-t-stone-800 mx-1" />
        <div className="flex-1 bg-stone-800" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo — now links to Home */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-stone-700">
                <path d="M12 2C12 2 8 6 8 10C8 12 9 14 12 14C15 14 16 12 16 10C16 6 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C12 14 6 12 4 8C4 8 6 16 12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C12 14 18 12 20 8C20 8 18 16 12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-wide text-stone-800">
              สุขสันต์
              <span className="text-stone-500 font-light text-sm ml-2 tracking-widest uppercase">Sawasdee</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium tracking-wide ${
                    isActive
                      ? 'text-stone-900 bg-stone-200'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* CTA Button */}
            <NavLink
              to="/contact"
              className="ml-4 px-5 py-2 bg-stone-800 text-stone-50 rounded-md hover:bg-stone-700 transition-colors duration-200 text-sm font-medium tracking-wide shadow-sm"
            >
              Book Experience
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle bottom decorative line */}
      <div className="h-px bg-stone-200 w-full" />
    </nav>
  );
}

export default Navbar;