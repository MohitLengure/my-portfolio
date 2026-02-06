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
    <div id="skills" className="col-span-1 md:col-span-12 lg:col-span-4 bento-card p-6 flex flex-col bento-card-hover bg-surface-50/50">
      <h3 className="text-xl font-bold text-surface-900 mb-4 flex items-center gap-2">
        <Terminal className="text-surface-400" size={20} />
        Tech Stack
      </h3>

      <div className="space-y-4 flex-grow">
        {skillCategories.map((cat, i) => (
          <div key={i} className="bg-white p-3 rounded-xl border border-surface-100 shadow-sm hover:border-primary-200 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              {cat.icon}
              <span className="font-semibold text-surface-800 text-sm">{cat.name}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map(skill => (
                <span key={skill} className="px-2 py-0.5 bg-surface-100 text-surface-600 text-[10px] rounded font-mono">
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