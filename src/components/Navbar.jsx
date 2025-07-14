// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const links = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-sm py-2 border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-md py-3'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Modern name treatment */}
        <motion.a 
          href="#home"
          className="group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary-500 to-indigo-600 bg-clip-text text-transparent">
              Mohit
            </span>
            <span className="text-gray-700 font-light"> Lengure</span>
          </span>
          <div className="h-0.5 bg-gradient-to-r from-primary-400 to-indigo-500 w-0 group-hover:w-full transition-all duration-300 mt-0.5" />
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.path}
              className="relative px-4 py-2 text-gray-600 hover:text-primary-500 font-medium transition-colors group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          className="md:hidden p-2 rounded-full bg-white/20 backdrop-blur-sm"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {open ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-2 space-y-1">
                {links.map(link => (
                  <motion.a
                    key={link.name}
                    href={link.path}
                    className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors font-medium"
                    onClick={() => setOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}