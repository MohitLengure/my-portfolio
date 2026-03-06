import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Github, Terminal } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-surface-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-surface-900 mb-4">Project not found</h1>
        <Link to="/" className="text-primary-600 font-medium flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface-50 min-h-screen py-24 md:py-32">
      <div className="container-custom">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-surface-500 hover:text-primary-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bento-card p-8 md:p-12 mb-8 bg-[#fafafa]"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block p-3 bg-white rounded-xl shadow-sm border border-surface-100 mb-6">
                {project.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">{project.title}</h1>
              <p className="text-lg text-surface-600 leading-relaxed mb-8">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.liveLink && project.liveLink !== '#' && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-1"
                  >
                    <Download size={20} />
                    Download APK
                  </a>
                )}
                
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white border border-surface-200 hover:border-surface-300 text-surface-700 font-bold rounded-xl shadow-sm transition-all hover:bg-surface-50"
                  >
                    <Github size={20} />
                    View Source
                  </a>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex items-center justify-center relative">
              <div className="absolute w-full h-full bg-primary-100 rounded-full blur-[100px] opacity-50 z-0"></div>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="relative z-10 w-full max-w-sm rounded-2xl shadow-2xl border-4 border-white object-cover"
                />
              ) : (
                <div className="relative z-10 w-full max-w-sm aspect-[4/3] bg-surface-100 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-surface-400 font-mono">No Cover Image</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Additional Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-12 bento-card p-8 bg-[#fafafa]"
          >
            <h3 className="text-xl font-bold text-surface-900 mb-6 flex items-center gap-2">
              <Terminal size={24} className="text-surface-400" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 bg-white border border-surface-200 text-surface-700 font-mono font-medium text-sm rounded-lg shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Dummy Screenshots */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-12 bento-card p-8 bg-[#fafafa]"
          >
            <h3 className="text-xl font-bold text-surface-900 mb-6 flex items-center gap-2">Project Screenshots</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {project.screenshots?.map((shot, idx) => (
                <div key={idx} className="aspect-[9/16] rounded-2xl overflow-hidden border-2 border-surface-200 shadow-md group bg-surface-100 flex items-center justify-center">
                  <img 
                    src={shot} 
                    alt={`Screenshot ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
