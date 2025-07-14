// src/data/skillsData.js
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
];

// src/data/projectsData.js
export const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with payment gateway integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/images/ecommerce.jpg',
    githubLink: '#',
    liveLink: '#',
  },
  // Add more projects
];