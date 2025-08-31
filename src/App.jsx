import React, { useState } from "react";
import ProductList from "./component/Productlist";
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <div className="app-container">
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </>
  );
}

export default App;