import { TextReveal } from './TextReveal';
import type { CSSProperties } from 'react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/BennettSchwartz' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gustycube/' },
  { label: 'X (Twitter)', href: 'https://x.com/BennettSchwartz' },
  { label: 'Substack', href: 'https://gustycube.substack.com' },
];

export function Contact() {
  return (
    <section className="scene scene-contact" id="contact">
      <div className="scene-contact-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>06 / Contact</TextReveal></span>
          <TextReveal as="h2" className="section-title">Let&apos;s work together</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Open to collaboration on infrastructure, AI, and the spaces between.</p>
        </header>

        <a className="contact-cta reveal-up delay-3" data-reveal href="mailto:gc@gustycube.xyz">
          gc@gustycube.xyz
          <span className="arrow">↗</span>
        </a>

        <div className="contact-elsewhere">
          <span className="contact-elsewhere-label">Elsewhere</span>
          <nav className="contact-socials" data-reveal aria-label="Social links">
            {socials.map((s, i) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ '--i': i } as CSSProperties}>
                {s.label} <span className="arrow">↗</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
