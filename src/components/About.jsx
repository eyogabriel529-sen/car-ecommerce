function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About CarShop</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to CarShop — your trusted destination for quality vehicles.
              We specialize in curating a selection of electric and sports cars
              that combine performance, style, and innovation.
            </p>
            <h3>What We Offer</h3>
            <ul>
              <li>🚗 Curated selection of electric and sports vehicles</li>
              <li>🔍 Easy browsing by category or search</li>
              <li>🛒 Simple shopping cart experience</li>
              <li>🔢 Adjust quantities with ease</li>
              <li>💰 Transparent pricing</li>
              <li>📱 Works beautifully on any device</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Cars Available</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;