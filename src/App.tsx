import { useEffect } from 'react';
import { AsciiGrid } from './components/AsciiGrid';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

declare global {
  interface Window {
    Lenis?: new (options?: Record<string, unknown>) => {
      raf: (time: number) => void;
      scrollTo: (target: HTMLElement | number, options?: Record<string, unknown>) => void;
      destroy: () => void;
    };
  }
}

export default function App() {
  // Master IntersectionObserver — adds .in-view to anything tagged
  // with data-reveal or [data-text-reveal] when it scrolls into view.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: reveal everything immediately
      document.querySelectorAll('[data-reveal], [data-text-reveal]').forEach((el) => {
        el.classList.add('in-view');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('[data-reveal], [data-text-reveal]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lenis smooth scroll + anchor link interception
  useEffect(() => {
    if (typeof window === 'undefined' || !window.Lenis) return;

    const lenis = new window.Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: Event) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      if (href === '#') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.4 });
        return;
      }
      if (href.length < 2) return;
      const target = document.querySelector(href) as HTMLElement | null;
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -40, duration: 1.4 });
      }
    };

    const handleBackTop = (e: Event) => {
      const btn = (e.target as HTMLElement).closest('[data-back-top]');
      if (!btn) return;
      e.preventDefault();
      lenis.scrollTo(0, { duration: 1.6 });
    };

    document.addEventListener('click', handleAnchorClick);
    document.addEventListener('click', handleBackTop);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('click', handleBackTop);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AsciiGrid />
      <Hero />
      <Projects />
      <TechStack />
      <Experience />
      <About />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
}
