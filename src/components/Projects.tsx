import { TextReveal } from './TextReveal';
import { ArrowIcon } from './ArrowIcon';
import { WordReveal } from './WordReveal';

interface Project {
  num: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Membrane',
    description: 'Open source memory and learning substrate for AI agents. Lets systems persist context across runs, recall it semantically, and refine behavior over time.',
    href: 'https://github.com/bennettschwartz/membrane',
    linkLabel: 'View source on GitHub',
  },
  {
    num: '02',
    title: 'Gain Laboratories',
    description: 'Designing AR glasses and an always-on spatial computing platform, with work across optics, embedded systems, spatial sensing, and wearable hardware.',
    href: 'https://gainlabs.us',
    linkLabel: 'Visit gainlabs.us',
  },
  {
    num: '03',
    title: 'Veridity',
    description: 'A nonprofit developing AI-assisted fact-checking for live political streams, helping viewers assess claims as they are made.',
    href: 'https://veridity.org',
    linkLabel: 'veridity.org',
  },
];

export function Projects() {
  return (
    <section className="scene scene-work" id="work">
      <div className="scene-work-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>01 / Work</TextReveal></span>
          <TextReveal as="h2" className="section-title">Selected projects</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>AR glasses, memory for AI agents, and live political fact-checking.</p>
        </header>

        <div className="work-list">
          {projects.map((p) => (
            <article key={p.num} className="project" data-reveal>
              <div className="project-num">{p.num}</div>
              <div className="project-body">
                <header className="project-header">
                  <TextReveal as="h3" className="project-title">{p.title}</TextReveal>
                </header>
                <WordReveal className="project-desc">{p.description}</WordReveal>
                <a className="project-link" href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.linkLabel} <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
