// src/components/Projects.jsx
import { useState } from 'react';
import { ExternalLink, Github, Smartphone, Cpu, Database, Code, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import objectDetectionImg from '../assets/object-detection.png';
import quickBillImg from '../assets/QuickBill.png';
import GrownFund from '../assets/GrownFund.png';
import QuickHire from '../assets/QuickHire.png';
import quickBitesImg from '../assets/quickbites.png';
import BVS from '../assets/BVS.jpg';

const ProjectCard = ({ project }) => {
  return (
    <div
      className="group relative bg-white border border-surface-200 rounded-3xl overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5 h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-surface-50 p-6 flex items-center justify-center group-hover:bg-surface-100 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10"></div>

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-auto object-contain transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-700 ease-out z-0 filter drop-shadow-md"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface-100">
            <Code className="w-12 h-12 text-surface-400" />
          </div>
        )}

        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-xl border border-surface-200 shadow-sm">
          {project.icon}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col bg-white">
        <h3 className="text-xl font-bold text-surface-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-surface-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-surface-100 text-surface-600 text-[10px] uppercase tracking-wider font-bold rounded-md border border-surface-200"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-surface-50 text-surface-400 text-[10px] rounded-md border border-surface-100">+{project.tags.length - 3}</span>
          )}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-surface-100">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-50 hover:bg-surface-100 text-surface-500 hover:text-surface-900 transition-colors"
              title="View Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex justify-center items-center py-2 rounded-xl bg-surface-900 hover:bg-primary-600 text-white shadow-lg shadow-surface-900/10 hover:shadow-primary-600/20 transition-all text-sm font-medium group/btn"
            >
              <span className="mr-2">View Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: "GrowFund App",
      description: "Secure investment platform with Gmail OTP verification and real-time portfolio tracking.",
      tags: ["Flutter", "Laravel", "REST API", "Firebase"],
      image: GrownFund,
      githubLink: "https://github.com/MohitLengure/growfund-app",
      liveLink: "/apk/growfund.apk",
      icon: <Smartphone className="h-5 w-5 text-primary-500" />
    },
    {
      title: "QuickHire Recruiter",
      description: "Recruiter dashboard with advanced candidate filtering and analytics.",
      tags: ["Flutter", "Dart", "Laravel", "State Mgmt"],
      image: QuickHire,
      githubLink: "https://github.com/MohitLengure/quickhire-recruiter",
      liveLink: "/apk/quickhire-recruiter.apk",
      icon: <Cpu className="h-5 w-5 text-secondary-500" />
    },
    {
      title: "QuickBill App",
      description: "POS solution with inventory management and thermal printing support.",
      tags: ["Flutter", "Laravel", "Printing", "SQLite"],
      image: quickBillImg,
      githubLink: "https://github.com/MohitLengure/quickbill-app",
      liveLink: "/apk/quickbill.apk",
      icon: <Database className="h-5 w-5 text-accent-teal" />
    },
    {
      title: "Realtime Object Detection",
      description: "Android app utilizing ML Kit for live object recognition.",
      tags: ["ML Kit", "Android", "Kotlin", "CameraX"],
      image: objectDetectionImg,
      githubLink: "https://github.com/MohitLengure/realtime-object-detection",
      liveLink: "/apk/realtime-object-detection.apk",
      icon: <Code className="h-5 w-5 text-accent-rose" />
    },
    {
      title: "BVS App",
      description: "Lead management with real-time GPS tracking and analytics.",
      tags: ["Flutter", "GPS", "Background Services"],
      image: BVS,
      githubLink: "https://github.com/MohitLengure/bvs-app",
      liveLink: "/apk/bvs.apk",
      icon: <Smartphone className="h-5 w-5 text-primary-500" />
    },
    {
      title: "QuickBites Food",
      description: "Food delivery platform with real-time order tracking.",
      tags: ["Android", "Kotlin", "Firebase", "MVVM"],
      image: quickBitesImg,
      githubLink: "https://github.com/MohitLengure/quickbites-food-app",
      liveLink: "#",
      icon: <Code className="h-5 w-5 text-secondary-500" />
    }
  ];

  const itemsPerPage = 3;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + itemsPerPage) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - itemsPerPage + projects.length) % projects.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div id="projects" className="py-2 overflow-hidden">
      <div className="flex items-end justify-between mb-8 px-2">
        <div>
          <h2 className="text-3xl font-bold text-surface-900">Selected Work</h2>
          <p className="text-surface-500 mt-1">Mobile & Web Engineering</p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2 border border-surface-200 rounded-full hover:bg-surface-100 hover:border-surface-300 transition-all text-surface-600"
            aria-label="Previous Projects"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-surface-200 rounded-full hover:bg-surface-100 hover:border-surface-300 transition-all text-surface-600"
            aria-label="Next Projects"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative min-h-[450px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 absolute w-full top-0 left-0"
          >
            {projects.slice(currentIndex, currentIndex + itemsPerPage).map((project, index) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center md:hidden">
        <a href="https://github.com/MohitLengure" target="_blank" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:underline">
          View GitHub Profile <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}