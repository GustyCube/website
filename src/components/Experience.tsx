import { TextReveal } from './TextReveal';
import { WordReveal } from './WordReveal';

interface Entry {
  date: string;
  company: string;
  role: string;
  description: string;
  href: string;
  linkLabel: string;
}

const entries: Entry[] = [
  {
    date: 'Aug 2025 → Present',
    company: 'Ignyte Solutions',
    role: 'CEO & Founder',
    description: 'Leading the design of Ignyte Direct, our distributed routing fabric of WireGuard-encrypted tunnels and DDoS-filtered edge ingress. Setting product direction and technical strategy.',
    href: 'https://ignyte.solutions',
    linkLabel: 'ignyte.solutions',
  },
  {
    date: '2025 → Present',
    company: 'Gain Laboratories',
    role: 'CEO & Owner',
    description: 'Running R&D across emerging technologies. Current focus on resilient navigation systems for GNSS-denied environments.',
    href: 'https://gainlabs.us',
    linkLabel: 'gainlabs.us',
  },
];

export function Experience() {
  return (
    <section className="scene scene-experience" id="experience">
      <div className="scene-experience-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>03 / Experience</TextReveal></span>
          <TextReveal as="h2" className="section-title">Currently</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Companies and projects I&apos;m running right now.</p>
        </header>

        <div className="exp-list">
          {entries.map((e) => (
            <article key={e.company} className="exp-entry" data-reveal>
              <p className="exp-date">{e.date}</p>
              <TextReveal as="h3" className="exp-company">{e.company}</TextReveal>
              <p className="exp-role">{e.role}</p>
              <WordReveal className="exp-desc">{e.description}</WordReveal>
              <a className="exp-link" href={e.href} target="_blank" rel="noopener noreferrer">
                {e.linkLabel} <span className="arrow">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
