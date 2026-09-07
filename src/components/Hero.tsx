import { Navbar } from './Navbar';
import { ArrowIcon } from './ArrowIcon';

export function Hero() {
  return (
    <section className="scene scene-hero" id="hero">
      <Navbar />

      <div className="stage">
        <h1 className="name">Bennett<br />Schwartz</h1>
        <div className="alias">
          <span>aka GustyCube</span>
          <span className="sep">·</span>
          <span><span className="flag">🇺🇸</span> Based in United States</span>
        </div>
        <p className="subtitle">Full Stack Software Developer, Researcher, and Entrepreneur</p>
        <a className="cta" href="#contact">Get in touch <ArrowIcon /></a>
      </div>

      <div />
      <span className="scroll-cue">Scroll</span>
    </section>
  );
}
