export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">Bennett Schwartz</span>
        <span className="footer-tagline">
          <span>aka GustyCube</span>
          <span className="sep">·</span>
          <span><span className="flag">🇺🇸</span> United States</span>
        </span>

        <button className="footer-back-top" type="button" data-back-top>
          Back to top <span className="arrow">↑</span>
        </button>

        <p className="footer-meta">
          © 2026 Bennett Schwartz<span className="sep">·</span>Always building, always learning
        </p>

        <span className="footer-mark">MMXXVI</span>
      </div>
    </footer>
  );
}
