import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Trophy, Activity } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'sports', label: 'Sports & Clubs' },
    { id: 'events', label: 'Events' },
    { id: 'hall-of-fame', label: 'Hall of Fame' },
    // { id: 'training', label: 'Training' },
    // { id: 'membership', label: 'Membership' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      } text-gray-800 dark:text-white`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-4 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="/images/img.jpg"
                alt="Fierce Falcons Logo" 
                className="relative w-14 h-14 rounded-full shadow-xl object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 text-transparent bg-clip-text transform group-hover:scale-105 transition-transform duration-300">
                Fierce Falcons
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                 Sports Society
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative flex items-center">
              <div className="flex items-center bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/20 dark:border-gray-700/30">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      currentPage === item.id
                        ? 'text-white shadow-lg'
                        : 'hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {currentPage === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full shadow-lg transition-all duration-300"></div>
                    )}
                    {hoveredItem === item.id && currentPage !== item.id && (
                      <div className="absolute inset-0 bg-gray-100/80 dark:bg-gray-700/50 rounded-full transition-all duration-300"></div>
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={toggleDarkMode}
              className="relative group p-3 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-700/30"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500 transform group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600 transform group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-700/30"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-700/30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-red-500" />
              ) : (
                <Menu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-[40rem] opacity-100 visible pb-6' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="relative mt-4">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-xl rounded-3xl"></div>
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 dark:border-gray-700/20">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`group flex items-center w-full px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-lg'
                        : 'hover:bg-gray-100/80 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Activity className={`w-5 h-5 mr-4 ${
                      currentPage === item.id 
                        ? 'text-white' 
                        : 'text-blue-600 dark:text-blue-400'
                    } transform group-hover:scale-110 transition-transform duration-300`} />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;