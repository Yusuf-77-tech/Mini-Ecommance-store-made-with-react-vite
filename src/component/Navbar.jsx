import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">Yusuf Store</div>
      <div className="cart-info">
        🛒 Cart: <span>{cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;