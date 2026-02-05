import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MinecraftPortfolio } from './components/MinecraftPortfolio';
import { updateMetaTags, DEFAULT_META_TAGS, MINECRAFT_META_TAGS } from './utils/updateMetaTags';

export default function App() {
  const currentPath = window.location.hash.slice(1) || '';
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentPath === 'minecraft-portfolio') {
      updateMetaTags(MINECRAFT_META_TAGS);
    } else {
      updateMetaTags(DEFAULT_META_TAGS);
    }
  }, [currentPath]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPath]);

  if (currentPath === 'minecraft-portfolio') {
    return <MinecraftPortfolio />;
  }

  return (
    <div ref={mainRef}>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Experience />
      <About />
      <Interests />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
