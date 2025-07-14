// src/components/Projects.jsx
import { ExternalLink, Github, Code, Smartphone, Cpu, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import objectDetectionImg from '../assets/object-detection.png';
import quickBillImg from '../assets/QuickBill.png';
import GrownFund from '../assets/GrownFund.png';
import QuickHire from '../assets/QuickHire.png';
import quickBitesImg from '../assets/quickbites.png';
import BVS from '../assets/BVS.jpg';

export default function Projects() {
  const projects = [
    {
      title: "GrowFund App",
      description: "Secure investment platform with Gmail OTP verification and real-time portfolio tracking. Implemented secure transaction flows and investor dashboards.",
      tags: ["Flutter", "Laravel", "REST API", "Firebase Auth"],
      image: GrownFund,
      githubLink: "https://github.com/MohitLengure/growfund-app",
      liveLink: "#",
      icon: <Smartphone className="h-5 w-5 text-primary-500" />
    },
    {
      title: "QuickHire Recruiter",
      description: "Comprehensive recruiter dashboard with advanced candidate filtering, interview scheduling, and analytics dashboard.",
      tags: ["Flutter", "Dart", "Laravel", "State Management"],
      image: QuickHire,
      githubLink: "https://github.com/MohitLengure/quickhire-recruiter",
      liveLink: "#",
      icon: <Cpu className="h-5 w-5 text-primary-500" />
    },
    {
      title: "QuickBill App",
      description: "Point-of-sale solution with inventory management, receipt generation, and sales analytics for small businesses.",
      tags: ["Flutter", "Laravel", "Thermal Printing", "SQLite"],
      image: quickBillImg,
      githubLink: "https://github.com/MohitLengure/quickbill-app",
      liveLink: "#",
      icon: <Database className="h-5 w-5 text-primary-500" />
    },
    {
      title: "Realtime Object Detection",
      description: "Android app utilizing ML Kit for live object recognition with camera feed processing and custom model integration.",
      tags: ["ML Kit", "Android", "Kotlin", "CameraX", "TensorFlow"],
      image: objectDetectionImg,
      githubLink: "https://github.com/MohitLengure/realtime-object-detection",
      liveLink: "#",
      icon: <Code className="h-5 w-5 text-primary-500" />
    },
    {
      title: "BVS App",
      description: "Lead management system with real-time GPS tracking, visit logging, and performance analytics for field teams.",
      tags: ["Flutter", "Background Services", "Geolocation", "Firebase"],
      image: BVS,
      githubLink: "https://github.com/MohitLengure/bvs-app",
      liveLink: "#",
      icon: <Smartphone className="h-5 w-5 text-primary-500" />
    },
    {
      title: "QuickBites Food App",
      description: "Food delivery platform with real-time order tracking, cart management, and push notifications.",
      tags: ["Android", "Kotlin", "Firebase", "MVVM", "Room DB"],
      image: quickBitesImg,
      githubLink: "https://github.com/MohitLengure/quickbites-food-app",
      liveLink: "#",
      icon: <Code className="h-5 w-5 text-primary-500" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface-900 relative overflow-hidden">
      {/* Decorative tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Technical Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcase of my Android and cross-platform development expertise
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-800 rounded-xl border border-surface-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
            >
              {/* Image container with tech overlay */}
              <div className="h-48 bg-surface-700 overflow-hidden relative flex-shrink-0">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/20 backdrop-blur-sm">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary-900/30 to-primary-800/20">
                    <span className="text-gray-400">Project Preview</span>
                  </div>
                )}
              </div>
              
              {/* Content area */}
              <div className="p-6 flex flex-col flex-grow border-t border-surface-700">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-surface-700 text-primary-300 text-xs font-mono rounded-full border border-surface-600 hover:bg-surface-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 mt-auto">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-surface-700 hover:bg-surface-600 text-gray-300 rounded-lg transition flex-1 justify-center border border-surface-600 group"
                    >
                      <Github className="h-4 w-4 mr-2 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="group-hover:text-white transition-colors">Code</span>
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg transition flex-1 justify-center group"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="https://github.com/MohitLengure" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-400 hover:bg-primary-900/30 rounded-lg font-medium transition group"
          >
            <span className="group-hover:text-white transition-colors">View All Projects on GitHub</span>
            <ExternalLink className="h-4 w-4 ml-2 group-hover:rotate-45 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}