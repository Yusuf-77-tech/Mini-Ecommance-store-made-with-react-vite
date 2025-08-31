import React from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    id: 2,
    name: "Headphones",
    price: 50,
    image: "https://images.unsplash.com/photo-1519666213638-7f6a5f0202d7?w=800&q=80"
  },
  {
    id: 3,
    name: "Smartphone",
    price: 500,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 150,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80"
  }
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="box">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;