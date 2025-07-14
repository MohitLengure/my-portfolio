// src/components/Footer.jsx
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-800 text-gray-300 py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center space-x-3 hover:text-white transition">
            <Phone className="h-5 w-5 text-primary-500" />
            <a href="tel:+917387784164" className="hover:underline">
              +91 7387784164
            </a>
          </div>
          
          <div className="flex items-center space-x-3 hover:text-white transition">
            <Mail className="h-5 w-5 text-primary-500" />
            <a href="mailto:mohitlengure2002@gmail.com" className="hover:underline">
              mohitlengure2002@gmail.com
            </a>
          </div>
          
          <div className="flex items-center space-x-3 hover:text-white transition">
            <Linkedin className="h-5 w-5 text-primary-500" />
            <a 
              href="https://linkedin.com/in/mohit-lengure-946077200" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
          
          <div className="flex items-center space-x-3 hover:text-white transition">
            <Github className="h-5 w-5 text-primary-500" />
            <a 
              href="https://github.com/MohitLengure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div> */}

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mohit Lengure. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Crafted with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}