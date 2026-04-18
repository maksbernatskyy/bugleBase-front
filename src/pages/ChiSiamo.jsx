export default function ChiSiamo() {
  return (
    <>
      <div className="about-container">
        <div className="about-hero">
          <h1 className="text-gradient">Dietro le Quinte di BugleBase</h1>
          <p>
            Passione per il codice, amore per il gaming. Siamo il ponte tra i
            dati e il divertimento.
          </p>
        </div>

        <section className="about-mission">
          <div className="mission-content">
            <h2>La nostra Mission</h2>
            <p>
              BugleBase nasce come progetto per catalogare l'arte videoludica.
              Utilizziamo le tecnologie più avanzate come{" "}
              <strong>Spring Boot</strong> per un backend solido e{" "}
              <strong>React</strong> per un'interfaccia utente dinamica e
              reattiva.
            </p>
          </div>
        </section>

        <section className="values-grid">
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h3>Performance</h3>
            <p>Ottimizzazione massima per un'esperienza fluida e senza lag.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🛠️</div>
            <h3>Tecnologia</h3>
            <p>Sviluppato con Java 17, Spring Data JPA e MySQL.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎨</div>
            <h3>Design</h3>
            <p>
              Interfacce curate nei minimi dettagli con CSS moderno e
              animazioni.
            </p>
          </div>
        </section>

        {/* Footer interno o CTA */}
        <footer className="about-footer">
          <p>Vuoi saperne di più sul progetto?</p>
          <a
            href="https://github.com/maksbernatskyy"
            target="_blank"
            className="github-link"
          >
            Visita il nostro GitHub
          </a>
        </footer>
      </div>
    </>
  );
}
