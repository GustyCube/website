export function Certifications() {
  const certs = [
    { name: 'The Complete Node.js Developer Course (3rd Edition)', provider: 'Udemy' },
    { name: 'Python for Data Science and Machine Learning Bootcamp', provider: 'Udemy' },
    { name: 'The Web Developer Bootcamp 2023', provider: 'Udemy' },
    { name: 'Java Programming Masterclass for Software Developers', provider: 'Udemy' },
    { name: 'Master Modern JavaScript', provider: 'Udemy' },
    { name: 'Develop Minecraft Plugins (Java)', provider: 'Udemy' },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-list stagger-children">
          {certs.map((cert, i) => (
            <div key={i} className="card cert-item fade-in">
              <span className="cert-bullet">&raquo;</span>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-provider">{cert.provider}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
