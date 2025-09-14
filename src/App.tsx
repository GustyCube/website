import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MinecraftPortfolio } from './components/MinecraftPortfolio';
import { updateMetaTags, DEFAULT_META_TAGS, MINECRAFT_META_TAGS } from './utils/updateMetaTags';

export default function App() {
  // Simple routing based on hash
  const currentPath = window.location.hash.slice(1) || '';
  
  // Update meta tags based on current route
  useEffect(() => {
    if (currentPath === 'minecraft-portfolio') {
      updateMetaTags(MINECRAFT_META_TAGS);
    } else {
      updateMetaTags(DEFAULT_META_TAGS);
    }
  }, [currentPath]);
  
  if (currentPath === 'minecraft-portfolio') {
    return <MinecraftPortfolio />;
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="relative">
        {/* Enhanced background with more depth */}
        <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5 pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <Projects />
          <TechStack />
          <Experience />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}