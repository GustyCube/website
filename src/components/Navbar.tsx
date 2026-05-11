import { XIcon, GlobeIcon, LinkedInIcon } from './SocialIcons';

export function Navbar() {
  return (
    <div className="top">
      <a className="mark" href="#">Bennett Schwartz</a>
      <nav className="nav-desktop" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#writing">Writing</a>
        <a href="#about">About</a>
        <span className="nav-divider" aria-hidden="true" />
        <div className="nav-socials">
          <a href="https://x.com/BennettSchwartz" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)">
            <XIcon />
          </a>
          <a href="https://gustycube.substack.com" target="_blank" rel="noopener noreferrer" aria-label="Substack — Writing" title="Substack — Writing">
            <GlobeIcon />
          </a>
          <a href="https://www.linkedin.com/in/gustycube/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
        <a href="#contact" className="contact-cta">Contact</a>
      </nav>
      <a className="menu-link" href="#contact">Contact <span aria-hidden="true">↗</span></a>
    </div>
  );
}
