export function Interests() {
  return (
    <section className="interests" id="interests">
      <div className="container">
        <h2 className="section-title">Interests</h2>
        <div className="interests-grid stagger-children">
          <div className="card interest-card fade-in">
            <h3>Philosophy &amp; Ethics</h3>
            <p>Exploring the deeper questions of technology, society, and human nature.</p>
          </div>
          <div className="card interest-card fade-in">
            <h3>Science &amp; Innovation</h3>
            <p>Passionate about scientific discovery and technological advancement.</p>
          </div>
          <div className="card interest-card fade-in">
            <h3>Democracy &amp; Society</h3>
            <p>Advocating for democratic values and social progress through technology.</p>
          </div>
          <div className="card interest-card fade-in">
            <h3>Capitalism &amp; Ethics</h3>
            <p>Balancing free market principles with ethical business practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
