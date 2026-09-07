import { TextReveal } from './TextReveal';
import { ArrowIcon } from './ArrowIcon';
import { WordReveal } from './WordReveal';

interface Entry {
  date?: string;
  company: string;
  role: string;
  description: string;
  href: string;
  linkLabel: string;
}

const entries: Entry[] = [
  {
    date: '2025 → Present',
    company: 'Gain Laboratories',
    role: 'CEO & Owner',
    description: 'Leading the design of AR glasses and an always-on spatial computing platform, from optics and displays to embedded computing and spatial sensing.',
    href: 'https://gainlabs.us',
    linkLabel: 'gainlabs.us',
  },
  {
    company: 'Veridity',
    role: 'Founder',
    description: 'Founded a nonprofit focused on AI-assisted fact-checking for live political streams.',
    href: 'https://veridity.org',
    linkLabel: 'veridity.org',
  },
];

export function Experience() {
  return (
    <section className="scene scene-experience" id="experience">
      <div className="scene-experience-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>03 / Experience</TextReveal></span>
          <TextReveal as="h2" className="section-title">Currently</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Organizations and projects I&apos;m running right now.</p>
        </header>

        <div className="exp-list">
          {entries.map((e) => (
            <article key={e.company} className="exp-entry" data-reveal>
              {e.date && <p className="exp-date">{e.date}</p>}
              <TextReveal as="h3" className="exp-company">{e.company}</TextReveal>
              <p className="exp-role">{e.role}</p>
              <WordReveal className="exp-desc">{e.description}</WordReveal>
              <a className="exp-link" href={e.href} target="_blank" rel="noopener noreferrer">
                {e.linkLabel} <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
