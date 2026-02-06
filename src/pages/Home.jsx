// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import Hero from "../components/Hero";
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-surface-50 min-h-screen py-24 md:py-32" id="home">
      <SEO
        title="Mohit Lengure | Full Stack Engineer & Mobile Developer"
        description="Portfolio of Mohit Lengure, a Full Stack Engineer specializing in high-performance mobile and web applications using Flutter, React, and Kotlin."
        keywords="Mohit Lengure, Full Stack, Flutter, React, Kotlin, Mobile Dev, Web Dev, Portfolio"
      />

      <div className="container-bento">
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section (Hero) - Spans full width initially */}
          <motion.div className="col-span-1 md:col-span-12" variants={itemVariants}>
            <Hero />
          </motion.div>

          {/* Main Content Grid */}
          <motion.div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6" variants={itemVariants}>
            <About />
            <Skills />
          </motion.div>

          <motion.div className="col-span-1 md:col-span-12" variants={itemVariants}>
            <Projects />
          </motion.div>

          <motion.div className="col-span-1 md:col-span-12" variants={itemVariants}>
            <Contact />
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-white border border-surface-200 text-primary-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-90 transition-all duration-300"
            aria-label="Back to Top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}