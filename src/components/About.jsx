// components/About.jsx
import { CheckCircleIcon, CodeBracketIcon, DevicePhoneMobileIcon, ServerStackIcon, CpuChipIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import MainPhoto from "../assets/Main Photo.jpg";

export default function About() {
  const skills = [
    { name: "Flutter & Dart", icon: <DevicePhoneMobileIcon className="h-5 w-5 text-primary-400 mr-2" /> },
    { name: "Kotlin & Jetpack Compose", icon: <CodeBracketIcon className="h-5 w-5 text-primary-400 mr-2" /> },
    { name: "Java & Android SDK", icon: <CpuChipIcon className="h-5 w-5 text-primary-400 mr-2" /> },
    { name: "Laravel & MySQL", icon: <ServerStackIcon className="h-5 w-5 text-primary-400 mr-2" /> },
    { name: "REST API Development", icon: <CodeBracketIcon className="h-5 w-5 text-primary-400 mr-2" /> },
    { name: "UI/UX-Focused Design", icon: <DevicePhoneMobileIcon className="h-5 w-5 text-primary-400 mr-2" /> },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-surface-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Me</span>
          </h2>
          
          <div className="space-y-6">
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm Mohit Lengure, a passionate Full Stack and Android Developer with over 1 year of hands-on experience in building scalable apps and efficient backend systems.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I specialize in developing cross-platform mobile apps using Flutter, Kotlin and Java, alongside backend systems using Laravel and MySQL. Whether it's building real-time apps like GrowFund or integrating Firebase and CameraX for advanced features, I aim to deliver clean, maintainable, and user-centric solutions.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I thrive on transforming ideas into working software, continuously learning and exploring new technologies to stay ahead in this fast-evolving tech landscape.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-2 gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center bg-surface-800 border border-surface-700 rounded-lg px-4 py-3 hover:border-primary-500/30 transition-colors"
              >
                {skill.icon}
                <span className="text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-96 w-full overflow-hidden rounded-xl border-2 border-surface-700 group-hover:border-primary-500/50 transition-all duration-500">
              <img
                src={MainPhoto}
                alt="Mohit Lengure"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900/70 via-surface-900/10 to-transparent"></div>
            </div>
          </div>
          
          {/* Floating tech badges */}
          <motion.div 
            className="absolute -bottom-4 -left-4 bg-surface-800 border border-primary-500/30 rounded-lg px-4 py-2 shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-sm font-mono text-primary-300">Android Dev</span>
          </motion.div>
          
          <motion.div 
            className="absolute -top-4 -right-4 bg-surface-800 border border-primary-500/30 rounded-lg px-4 py-2 shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <span className="text-sm font-mono text-primary-300">Flutter</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}