import { useCart } from "../context/CartContext";

function CarCard({ car }) {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={car.name} />
        <span className="car-category">{car.category}</span>
      </div>
      <div className="car-info">
        <h3 className="car-name">{car.name}</h3>
        <p className="car-brand">{car.brand} • {car.year}</p>
        <p className="car-description">{car.description}</p>
        <div className="car-features">
          {car.features.map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>
        <div className="car-footer">
          <span className="car-price">{formatPrice(car.price)}</span>
          <button className="add-to-cart-btn" onClick={() => addToCart(car)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;