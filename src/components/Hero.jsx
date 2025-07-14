// src/components/Hero.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfilePhoto from "../assets/mohit-lengure.jpg";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const roles = [
    "Android Developer", 
    "Full Stack Engineer", 
    "Flutter Expert", 
    "Kotlin Specialist",
    "Tech Enthusiast"
  ];
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 1500;

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (isDeleting) {
        setTypedText(currentRole.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setTypedText(currentRole.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        if (currentIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenRoles);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [typedText, currentIndex, isDeleting, loopNum]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-surface-900 to-surface-800 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Mohit Lengure</span>
          </h1>
          
          <div className="flex items-center">
            <div className="h-px w-12 bg-gradient-to-r from-primary-400 to-secondary-400 mr-4"></div>
            <h2 className="text-xl md:text-2xl text-gray-300 h-8 font-mono">
              <span className="text-primary-300">{typedText}</span>
              <span className="ml-1 animate-pulse">_</span>
            </h2>
          </div>
          
          <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
            I architect and engineer high-performance mobile and web solutions with a focus on clean code, scalable architecture, and exceptional user experiences. My expertise spans the full stack with specialized knowledge in Flutter, Kotlin, and modern web technologies.
          </p>
          
          <div className="flex gap-4 pt-4">
            <motion.button 
              onClick={handleViewProjects}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
            
            <motion.button 
              onClick={handleContactMe}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-primary-500 text-primary-400 hover:bg-primary-900/50 rounded-lg font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </motion.button>
          </div>
          
          {/* Tech stack indicators */}
          <div className="pt-6">
            <p className="text-sm text-gray-400 mb-2">TECH STACK</p>
            <div className="flex flex-wrap gap-3">
              {['Flutter', 'Kotlin','Jetpack Compose', 'Laravel','Java', 'Firebase'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-3 py-1 bg-surface-800 border border-surface-700 rounded-full text-sm text-gray-300 hover:text-primary-300 hover:border-primary-400 transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Profile image with tech-inspired design */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Decorative tech elements */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full bg-surface-800 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center border border-surface-700 group-hover:border-primary-400 transition-all duration-500">
              <img
                src={ProfilePhoto}
                alt="Mohit Lengure"
                className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating tech badges */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-surface-800 border border-primary-500/30 rounded-lg px-3 py-1 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-xs font-mono text-primary-300">Android</span>
            </motion.div>
            
            <motion.div 
              className="absolute -top-4 -left-4 bg-surface-800 border border-primary-500/30 rounded-lg px-3 py-1 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <span className="text-xs font-mono text-primary-300">Flutter</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-2">SCROLL DOWN</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}