import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Instagram, MessageCircle, Youtube, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Sports from './pages/Sports';
import Events from './pages/Events';
import HallOfFame from './pages/HallOfFame';
import Training from './pages/Training';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    const pages = {
      home: <Home />,
      about: <About />,
      sports: <Sports />,
      events: <Events />,
      'hall-of-fame': <HallOfFame />,
      training: <Training />,
      membership: <Membership />,
      gallery: <Gallery />,
      contact: <Contact />
    };

    return (
      <div className="animate-fade-in page-transition">
        {pages[currentPage as keyof typeof pages]}
      </div>
    );
  };

  // Loading screen
  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 flex items-center justify-center ${darkMode ? 'dark' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"
            />
          </div>

          <div className="relative z-10 text-center px-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <img 
                  src="/images/img.jpg"
                  alt="Avatar"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
            >
              Fierce Falcons
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl text-white/90 font-light italic"
            >
              GTB4CEC
            </motion.p>

            {/* Loading animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-12"
            >
              <div className="flex justify-center space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-3 h-3 bg-white/70 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Main App return with scroll container
  return (
    <div 
      ref={containerRef} 
      className={`min-h-screen ${darkMode ? 'dark' : ''} overflow-y-auto`}
    >
      <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <main className={`${currentPage === 'about' ? '' : 'container mx-auto px-4'}`}>
          {renderPage()}
        </main>
        {currentPage !== 'about' && (
          <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-16 mt-20">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {/* Logo and Description */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">FF</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">Fierce Falcons</h3>
                      <p className="text-blue-300">GTB4CEC Sports Society</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed max-w-md">
                    Eyes on the Prize, Wings to the Skies! Empowering athletes, creating champions, 
                    and building a community of passionate sports enthusiasts.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-blue-300">Quick Links</h4>
                  <ul className="space-y-2">
                    {[
                      { name: 'About Us', page: 'about' },
                      { name: 'Sports & Clubs', page: 'sports' },
                      { name: 'Events', page: 'events' },
                      { name: 'Hall of Fame', page: 'hall-of-fame' },
                      { name: 'Gallery', page: 'gallery' },
                      { name: 'Contact', page: 'contact' },
                    ].map((link) => (
                      <li key={link.page}>
                        <button
                          onClick={() => setCurrentPage(link.page)}
                          className="text-gray-300 hover:text-white transition-colors w-full text-left"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-blue-300">Connect With Us</h4>
                  <div className="space-y-4">
                    <a 
                      href="https://www.instagram.com/fierce.falcons/?hl=e" 
                      target="_blank" 
                      className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      <Instagram size={20} />
                      <span>@fierce.falcons</span>
                    </a>
                    <a 
                      href="https://chat.whatsapp.com/BQj0rR4GwB17znAhwSJXKS" 
                      target="_blank" 
                      className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <MessageCircle size={20} />
                      <span>WhatsApp Community</span>
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <Youtube size={20} />
                      <span>YouTube Channel</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2025 Fierce Falcons. All rights reserved. | GTB4CEC Sports Society
                </p>
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;
