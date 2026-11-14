import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CarList from "./components/CarList";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <CarList />
          <About />
          <Contact />
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}

export default App;