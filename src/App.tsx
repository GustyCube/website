import { useEffect, useState } from 'react';
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
import { getRouteFromLocation, type AppRoute } from './utils/routes';

interface AppProps {
  initialRoute?: AppRoute;
}

export default function App({ initialRoute = '' }: AppProps) {
  const [currentPath, setCurrentPath] = useState<AppRoute>(initialRoute);

  useEffect(() => {
    const syncRoute = () => {
      setCurrentPath(getRouteFromLocation(window.location.pathname, window.location.hash));
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    if (currentPath === 'minecraft-portfolio') {
      updateMetaTags(MINECRAFT_META_TAGS);
    } else {
      updateMetaTags(DEFAULT_META_TAGS);
    }
  }, [currentPath]);

  // Scroll reveal observer
  useEffect(() => {
    if (currentPath === 'minecraft-portfolio' || typeof IntersectionObserver === 'undefined') {
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
  }, [currentPath]);

  if (currentPath === 'minecraft-portfolio') {
    return <MinecraftPortfolio />;
  }

  return (
    <div>
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
