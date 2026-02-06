// src/components/Footer.jsx
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-surface-200 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-primary-200/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-surface-900 mb-2">Mohit Lengure<span className="text-primary-500">.</span></h3>
            <p className="text-surface-600 text-sm">Full Stack Developer & Android Engineer</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/MohitLengure"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-surface-500 hover:text-primary-600 hover:bg-surface-100 rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mohit-lengure-946077200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-surface-500 hover:text-primary-600 hover:bg-surface-100 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mohitlengure2002@gmail.com"
              className="p-2 text-surface-500 hover:text-primary-600 hover:bg-surface-100 rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+917387784164"
              className="p-2 text-surface-500 hover:text-primary-600 hover:bg-surface-100 rounded-lg transition-all"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-surface-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface-500">
          <p>&copy; {currentYear} All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500/20" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}