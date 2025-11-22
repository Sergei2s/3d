
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Phone, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeContext';
import LottieLogo from './LottieLogo';

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Команда', href: '#team' },
  { label: 'Контакты', href: '#contacts' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled for transparency effect
      setIsScrolled(currentScrollY > 20);

      // Hide header on scroll down, show on scroll up
      // Only activate after 100px to avoid flickering at top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              {/* Lottie Animation Component */}
              <div className="transition-transform duration-300 group-hover:scale-110">
                 <LottieLogo />
              </div>
              
              <span className={`font-serif font-medium text-2xl tracking-tight transition-colors group-hover:text-primary ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'} `}>
                GallaMarin
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors hover:underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-primary"
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors transform hover:rotate-12"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-accent" />}
            </button>

            <a
              href="#contacts"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2 transform hover:scale-105 active:scale-95"
            >
              <Phone size={16} />
              Заказать 3D-тур
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-accent" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none transition-transform hover:scale-110"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors hover:translate-x-2"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contacts" 
              onClick={() => setIsOpen(false)}
              className="block mt-4 w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
            >
              Заказать 3D-тур <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
