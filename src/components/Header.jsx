import { useCart } from "../context/CartContext";

function Header() {
  const { getTotalItems, toggleCart } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">🚗 CarShop</h1>
        <nav className="nav">
          <a href="#cars">Browse Cars</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="cart-button" onClick={toggleCart}>
          🛒 Cart
          <span className="cart-count">{getTotalItems()}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;