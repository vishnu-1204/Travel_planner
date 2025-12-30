import "./styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="animate fade-up delay-1">
          Plan Your <span>Perfect Journey</span>
        </h1>

        <p className="animate fade-up delay-2">
          Discover handpicked travel packages across India and international
          destinations. From weekend getaways to long vacations.
        </p>

        <div className="hero-buttons animate fade-up delay-3">
          <button className="primary-btn">Explore Packages</button>
          <button className="secondary-btn">Plan Custom Trip</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
