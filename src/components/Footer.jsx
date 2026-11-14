function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>🚗 CarShop</h3>
            <p>Your trusted destination for quality vehicles</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#cars">Browse Cars</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Categories</h4>
              <a href="#cars">Electric</a>
              <a href="#cars">Sports</a>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 hello@carshopexample.com</p>
              <p>📞 +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CarShop. Built with React for learning purposes.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;