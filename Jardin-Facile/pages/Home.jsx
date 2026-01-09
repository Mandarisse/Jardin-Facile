import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-badge">
            <span className="leaf-icon">🌿</span>
            <p>Votre jardin, notre passion</p>
          </div>
          
          <h1 className="hero-title">
            Des Jardins Magnifiques, Entretenus avec Soin
          </h1>
          
          <p className="hero-description">
            Services professionnels d'entretien de jardins et d'aménagement paysager.
            <br />
            Transformez votre espace extérieur en un véritable paradis vert.
          </p>
          
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Demander un Devis
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Nos Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;