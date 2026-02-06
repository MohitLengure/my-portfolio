// src/components/About.jsx
import { motion } from 'framer-motion';
import { Briefcase, Code, User, Rocket } from 'lucide-react';
import MainPhoto from "../assets/Main Photo.jpg";

export default function About() {
  return (
    <div className="col-span-1 md:col-span-12 lg:col-span-8 bento-card p-8 flex flex-col md:flex-row gap-8 items-center bento-card-hover group">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-80 transition-opacity"></div>

      <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative">
        <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-surface-50 shadow-lg relative z-10">
          <img
            src={MainPhoto}
            alt="Mohit Lengure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-3 -right-3 z-20 bg-white p-2 rounded-lg shadow-md border border-surface-100">
          <Code className="text-primary-600 w-6 h-6" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-2xl font-bold text-surface-900">About Me</h2>
          <div className="h-px bg-surface-200 flex-grow ml-4"></div>
        </div>

        <p className="text-surface-600 leading-relaxed mb-6">
          I'm a passionate Software Engineer driven by the curiosity to understand how things work.
          With specialized expertise in <span className="text-primary-700 font-semibold bg-primary-50 px-1 rounded">Flutter, Kotlin, and React</span>,
          I bridge the gap between complex backend systems and intuitive user interfaces.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-surface-50 p-3 rounded-xl border border-surface-100 flex flex-col items-center text-center">
            <span className="text-xl font-bold text-surface-900">10+</span>
            <span className="text-xs text-surface-500 uppercase font-medium">Projects</span>
          </div>
          <div className="bg-surface-50 p-3 rounded-xl border border-surface-100 flex flex-col items-center text-center">
            <span className="text-xl font-bold text-surface-900">1+</span>
            <span className="text-xs text-surface-500 uppercase font-medium">Years</span>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-primary-600 p-3 rounded-xl shadow-lg shadow-primary-500/20 flex flex-col items-center text-center text-white">
            <Rocket className="w-5 h-5 mb-1" />
            <span className="text-xs font-bold uppercase">Hire Me</span>
          </div>
        </div>
      </div>
    </div>
  );
}