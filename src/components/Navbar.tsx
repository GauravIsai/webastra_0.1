
import { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl md:text-2xl font-display font-bold gradient-text">
              WebAstra
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#hero" className="text-sm font-medium hover:text-brand-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm font-medium hover:text-brand-600 transition-colors">
                About
              </a>
              <a href="#services" className="text-sm font-medium hover:text-brand-600 transition-colors">
                Services
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-brand-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="glass px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <a 
            href="#hero" 
            className="block px-3 py-4 text-base font-medium hover:text-brand-600 transition-colors" 
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block px-3 py-4 text-base font-medium hover:text-brand-600 transition-colors" 
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#services" 
            className="block px-3 py-4 text-base font-medium hover:text-brand-600 transition-colors" 
            onClick={closeMenu}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-4 text-base font-medium hover:text-brand-600 transition-colors" 
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
