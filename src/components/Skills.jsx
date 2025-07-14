// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Database, GitBranch, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: "Mobile Development",
      icon: <Smartphone className="h-6 w-6 text-primary-400" />,
      skills: [
        { name: "Kotlin", level: 90 },
        { name: "Android SDK", level: 85 },
        { name: "Jetpack Compose", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Java", level: 70 },
      ]
    },
    {
      name: "Backend & APIs",
      icon: <Database className="h-6 w-6 text-primary-400" />,
      skills: [
        { name: "Laravel", level: 55 },
        { name: "REST APIs", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Spring Boot", level: 45 },
      ]
    },
    {
      name: "Tools & Technologies",
      icon: <Cpu className="h-6 w-6 text-primary-400" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Android Studio", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl opacity-20"></div>
      
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
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My proficiency across the mobile development stack
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-700 rounded-xl p-6 border border-surface-600 hover:border-primary-500/30 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-surface-600 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-surface-600 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}