// src/pages/Home.jsx
import Hero from "../components/Hero";
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

// src/pages/Home.jsx
// export default function Home() {
//   return (
//     <div className="p-8 text-center">
//       <h1 className="text-4xl font-bold">TEST CONTENT</h1>
//       <p>If you see this, routing works</p>
//     </div>
//   );
// }