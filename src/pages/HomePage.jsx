import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">New Generation Database</span>
            <h1 className="hero-title">
              THE ULTIMATE <span className="text-gradient">GAMING</span> LIBRARY
            </h1>
            <p className="hero-subtitle">
              Esplora i capolavori dello sviluppo videoludico. Dai grandi
              classici Rockstar Games alle sfide impossibili di FromSoftware.
              Tutto in un unico archivio.
            </p>
            <div className="hero-btns">
              <Link to="/games" className="btn-primary">
                Sfoglia Giochi
              </Link>
              <Link to="/chisiamo" className="btn-secondary">
                Scopri il Progetto
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            {/* Qui potresti mettere un'immagine astratta o un'animazione CSS */}
            <div className="glow-sphere"></div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Titoli AAA</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Top Studios</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Open Source</span>
          </div>
        </section>
      </div>
    </>
  );
}
