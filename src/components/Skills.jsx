// src/components/Skills.jsx
import { Smartphone, Globe, Server, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: "Mobile",
      icon: <Smartphone className="h-5 w-5 text-primary-600" />,
      skills: ["Kotlin", "Flutter", "Dart", "Java"]
    },
    {
      name: "Web",
      icon: <Globe className="h-5 w-5 text-secondary-600" />,
      skills: ["React", "Tailwind", "JS (ES6+)"]
    },
    {
      name: "Backend",
      icon: <Server className="h-5 w-5 text-accent-teal" />,
      skills: ["Laravel", "MySQL", "Firebase"]
    },
  ];

  return (
    <div id="skills" className="w-full bento-card p-6 lg:p-8 flex flex-col bento-card-hover bg-[#fafafa]/50">
      <h3 className="text-xl lg:text-3xl font-bold text-surface-900 mb-6 flex items-center gap-3">
        <Terminal className="text-surface-400" size={28} />
        Tech Stack
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 flex-grow">
        {skillCategories.map((cat, i) => (
          <div key={i} className="bg-[#fafafa] p-5 rounded-xl border border-surface-100 shadow-sm hover:border-primary-200 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              {cat.icon}
              <span className="font-bold text-surface-800 text-lg">{cat.name}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-surface-100 text-surface-700 text-sm rounded font-mono font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}