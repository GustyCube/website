import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <a href="#" className="nav-logo">GustyCube</a>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>///</button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
