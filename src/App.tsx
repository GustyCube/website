import { useEffect } from 'react';
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

export default function App() {
  // Scroll reveal observer
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

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
  }, []);

  return (
    <div>
      <a href="https://ghcommits.com" target="_blank" rel="noopener noreferrer" className="marquee-banner">
        <div className="marquee-track">
          <span>Check out where you rank on the GitHub commits leaderboard — <span className="marquee-link">ghcommits.com</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
          <span>Check out where you rank on the GitHub commits leaderboard — <span className="marquee-link">ghcommits.com</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
          <span>Check out where you rank on the GitHub commits leaderboard — <span className="marquee-link">ghcommits.com</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
          <span>Check out where you rank on the GitHub commits leaderboard — <span className="marquee-link">ghcommits.com</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
        </div>
      </a>
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
