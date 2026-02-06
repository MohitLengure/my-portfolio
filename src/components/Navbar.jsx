// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const links = [
    { name: 'Home', path: 'home' },
    { name: 'Projects', path: 'projects' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Contact', path: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = links.map(link => document.getElementById(link.path));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section &&
          section.offsetTop <= scrollPosition &&
          (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setOpen(false);
    setActiveSection(id);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${scrolled
        ? 'glass-nav py-3'
        : 'bg-transparent py-5'
        }`}>
        <div className="container-custom flex justify-between items-center">
          {/* Logo Area */}
          <motion.a
            href="/"
            onClick={(e) => handleNavClick(e, 'home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group cursor-pointer z-50"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow duration-300">
                M
              </div>
              <span className="text-xl font-heading font-bold tracking-tight text-surface-900 group-hover:text-primary-600 transition-colors">
                Lengure<span className="text-primary-500">.</span>
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation - Glass Island Style */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 ${scrolled ? 'bg-transparent' : 'bg-white/50 backdrop-blur-md border border-surface-200 shadow-sm'
                }`}
            >
              {links.map((link) => {
                const isActive = activeSection === link.path;
                return (
                  <a
                    key={link.name}
                    href={`#${link.path}`}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full group ${isActive ? 'text-primary-700' : 'text-surface-600 hover:text-primary-600'
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white shadow-sm border border-surface-200 rounded-full"
                        style={{ zIndex: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}

              <div className="pl-2 pr-1">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="px-5 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-full shadow-lg shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden relative z-50 p-2 text-surface-600 hover:text-primary-600 transition-colors"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-0 left-0 w-full bg-white border-b border-surface-200 shadow-xl pt-24 pb-8 px-4 flex flex-col gap-4"
              >
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={`#${link.path}`}
                    onClick={(e) => handleNavClick(e, link.path)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className={`block text-2xl font-heading font-bold hover:pl-4 transition-all duration-300 border-l-2 pl-2 ${activeSection === link.path
                        ? 'text-primary-600 border-primary-500 pl-4'
                        : 'text-surface-700 border-transparent hover:text-primary-600 hover:border-primary-500'
                      }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 block w-full text-center py-4 bg-primary-600 active:bg-primary-700 text-white rounded-xl font-bold text-lg shadow-lg"
                >
                  Let's Talk
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 origin-left z-[60]"
        style={{ scaleX }}
      />
    </>
  );
}