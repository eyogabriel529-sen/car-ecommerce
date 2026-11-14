import { useState } from "react";
import CarCard from "./CarCard";
import { cars, categories } from "../data/cars";

function CarList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchesCategory =
      selectedCategory === "All" || car.category === selectedCategory;
    const matchesSearch =
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cars" className="cars-section">
      <div className="container">
        <div className="section-header">
          <h2>Browse Our Cars</h2>
          <p>{filteredCars.length} vehicle{filteredCars.length !== 1 ? "s" : ""} found</p>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="cars-grid">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="no-results">
            <p>No cars match your filters. Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CarList;