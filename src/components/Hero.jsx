// src/components/Hero.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Briefcase } from 'lucide-react';
import ProfilePhoto from "../assets/mohit-lengure.jpg";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 mb-6">

      {/* Profile Card - 4 Columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="col-span-1 md:col-span-4 lg:col-span-3 bento-card p-6 flex flex-col items-center text-center bento-card-hover"
      >
        <div className="relative w-32 h-32 mb-4">
          <img
            src={ProfilePhoto}
            alt="Mohit Lengure"
            className="w-full h-full object-cover rounded-full border-4 border-surface-50 shadow-md"
          />
          <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white" title="Available for work"></div>
        </div>

        <h2 className="text-2xl font-bold text-surface-900 mb-1">Mohit Lengure</h2>
        <p className="text-surface-500 text-sm mb-4">Full Stack Engineer</p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3 py-1 bg-surface-100 rounded-full text-xs font-medium text-surface-600 flex items-center gap-1">
            <MapPin size={12} /> India
          </span>
          <span className="px-3 py-1 bg-primary-50 rounded-full text-xs font-medium text-primary-700 flex items-center gap-1">
            <Briefcase size={12} /> Freelance
          </span>
        </div>

        <div className="flex gap-3 mt-auto w-full">
          <a href="mailto:contact@mohit.dev" className="flex-1 py-2 bg-surface-900 text-white rounded-xl text-sm font-medium hover:bg-surface-800 transition-colors">
            Email
          </a>
          <a href="/resume.pdf" target="_blank" className="flex-1 py-2 bg-surface-100 text-surface-900 rounded-xl text-sm font-medium hover:bg-surface-200 transition-colors">
            CV
          </a>
        </div>
      </motion.div>

      {/* Intro / Hero Card - 8 Columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="col-span-1 md:col-span-8 lg:col-span-6 bento-card p-8 md:p-12 relative flex flex-col justify-center min-h-[400px] overflow-hidden group"
      >
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-200 transition-colors duration-700"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 mb-6 leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">digital products</span> that matter.
          </h1>
          <p className="text-lg text-surface-600 max-w-xl mb-8 leading-relaxed">
            I transform complex problems into elegant solutions using Flutter, Kotlin, and modern web technologies. Focus on scalability and user experience.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all"
            >
              View Selected Work <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Stats / Socials / Quick Stack - 3 Columns (Desktop) or 12 (Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="col-span-1 md:col-span-12 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4"
      >
        {/* Social Box */}
        <div className="bento-card p-6 flex flex-col justify-center items-center gap-4 bento-card-hover bg-gradient-to-br from-surface-900 to-surface-800 text-white border-0">
          <p className="text-surface-300 text-sm font-medium">Connect</p>
          <div className="flex gap-4">
            <a href="https://github.com/MohitLengure" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/mohit-lengure" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Experience Box */}
        <div className="bento-card p-6 flex flex-col justify-center items-center bento-card-hover">
          <span className="text-4xl font-bold text-primary-600">1+</span>
          <span className="text-sm text-surface-500 font-medium">Years Exp.</span>
        </div>

        {/* Project Count Box */}
        <div className="col-span-2 lg:col-span-1 bento-card p-6 flex justify-between items-center bento-card-hover">
          <div>
            <p className="text-2xl font-bold text-surface-900">10+</p>
            <p className="text-xs text-surface-500">Projects Shipped</p>
          </div>
          <div className="h-10 w-10 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600">
            <Briefcase size={20} />
          </div>
        </div>

      </motion.div>

    </div>
  );
}