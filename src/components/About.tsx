import { TextReveal } from './TextReveal';
import { WordReveal } from './WordReveal';

export function About() {
  return (
    <section className="scene scene-about" id="about">
      <div className="scene-about-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>04 / About</TextReveal></span>
          <TextReveal as="h2" className="section-title">Behind the work</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Who I am, and how I got here.</p>
        </header>

        <TextReveal as="p" className="about-statement">Building things that sit at the intersection of technology and society.</TextReveal>

        <div className="about-body">
          <WordReveal>I&apos;m a software developer, entrepreneur, and researcher based in the United States, focused on building infrastructure-level software, scalable systems, and thoughtful applications that sit at the intersection of technology and society. I discovered programming at 5 years old, and what started as curiosity has evolved into expertise spanning full-stack development, systems engineering, networking, and AI tooling.</WordReveal>
          <WordReveal>I&apos;m currently leading Ignyte Solutions and building Membrane, an open-source agent memory and learning substrate. My work is driven by an insatiable curiosity about how things work, from the smallest algorithms to the largest distributed systems.</WordReveal>
          <WordReveal>Beyond coding, I&apos;m deeply fascinated by all kinds of sciences, from computer science and mathematics to physics, biology, and cognitive science. I&apos;m equally passionate about philosophy and ethics, exploring how technology intersects with human values and societal progress.</WordReveal>
          <WordReveal>I believe in the power of democratic values and ethical approaches to technology development. My diverse interests fuel my approach to problem-solving, bringing interdisciplinary thinking to every project I tackle.</WordReveal>
        </div>
      </div>
    </section>
  );
}
