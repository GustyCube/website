export function TechStack() {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="card tech-unified fade-in">
          <div className="tech-row">
            <h3>Frontend</h3>
            <div className="tech-items">
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">TypeScript</span>
            </div>
          </div>
          <div className="tech-row">
            <h3>Backend</h3>
            <div className="tech-items">
              <span className="tag">Go</span>
              <span className="tag">Python</span>
            </div>
          </div>
          <div className="tech-row">
            <h3>Databases</h3>
            <div className="tech-items">
              <span className="tag">PostgreSQL</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Redis</span>
            </div>
          </div>
          <div className="tech-row">
            <h3>Infra</h3>
            <div className="tech-items">
              <span className="tag">Linux</span>
              <span className="tag">Docker</span>
              <span className="tag">Cloudflare</span>
            </div>
          </div>
          <div className="tech-row">
            <h3>Environment</h3>
            <div className="tech-items">
              <span className="tag">macOS</span>
              <span className="tag">VS Code</span>
            </div>
          </div>
        </div>
        <p className="tech-note">I probably forgot something... always learning!</p>
      </div>
    </section>
  );
}
