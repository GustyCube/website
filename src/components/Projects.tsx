import { TextReveal } from './TextReveal';
import { WordReveal } from './WordReveal';
import type { CSSProperties } from 'react';

interface Project {
  num: string;
  title: string;
  status: 'active' | 'os';
  statusLabel: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Ignyte Solutions',
    status: 'active',
    statusLabel: 'Active',
    description: 'Infrastructure-level networking software providing portable public IPv4 connectivity. Dedicated IPs that follow devices across networks using WireGuard-encrypted tunnels and DDoS-filtered edge ingress.',
    tags: ['Networking', 'Distributed Systems', 'WireGuard', 'Infrastructure'],
    href: 'https://ignyte.solutions',
    linkLabel: 'Visit ignyte.solutions',
  },
  {
    num: '02',
    title: 'Membrane',
    status: 'os',
    statusLabel: 'Open Source',
    description: 'Open source memory and learning substrate for AI agents. Lets systems persist context across runs, recall it semantically, and refine behavior over time.',
    tags: ['Python', 'AI Agents', 'Memory', 'Open Source'],
    href: 'https://github.com/bennettschwartz/membrane',
    linkLabel: 'View source on GitHub',
  },
  {
    num: '03',
    title: 'Gain Laboratories',
    status: 'active',
    statusLabel: 'Active',
    description: 'Building resilient navigation systems for GNSS-denied environments. Research focused on positioning that stays accurate where satellite signals fail.',
    tags: ['Navigation', 'GNSS', 'Sensor Fusion', 'Research'],
    href: 'https://gainlabs.us',
    linkLabel: 'Visit gainlabs.us',
  },
];

export function Projects() {
  return (
    <section className="scene scene-work" id="work">
      <div className="scene-work-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>01 / Work</TextReveal></span>
          <TextReveal as="h2" className="section-title">Selected projects</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>A short list — infrastructure networking, programming languages, and tools for evaluating AI systems.</p>
        </header>

        <div className="work-list">
          {projects.map((p) => (
            <article key={p.num} className="project" data-reveal>
              <div className="project-num">{p.num}</div>
              <div className="project-body">
                <header className="project-header">
                  <TextReveal as="h3" className="project-title">{p.title}</TextReveal>
                  <span className={`project-status ${p.status}`}>{p.statusLabel}</span>
                </header>
                <WordReveal className="project-desc">{p.description}</WordReveal>
                <div className="project-tags">
                  {p.tags.map((tag, i) => (
                    <span key={tag} className="tag" style={{ '--i': i } as CSSProperties}>{tag}</span>
                  ))}
                </div>
                <a className="project-link" href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.linkLabel} <span className="arrow">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
