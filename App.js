import React, { useState } from "react";
import "./styles.css";

const products = [
  { id: 1, name: "Rose Crochet Bouquet", price: 25, image: "https://via.placeholder.com/300" },
  { id: 2, name: "Tulip Crochet Bouquet", price: 20, image: "https://via.placeholder.com/300" },
  { id: 3, name: "Custom Mixed Bouquet", price: 35, image: "https://via.placeholder.com/300" }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Crochet Bouquet Shop 🌸</h1>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item, i) => (
          <p key={i}>{item.name} - ${item.price}</p>
        ))}
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}
