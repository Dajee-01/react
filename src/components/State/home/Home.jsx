import React, { useState } from "react";
import "./home.css";
import Cart from "../Cart";

export default function Home() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [cartItems, setCardItems] = useState([]);
  const handleAddtoCart = (e) => {
    e.preventDefault();
    if (productName && productPrice) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
      };
      setCardItems([...cartItems, newProduct]);
      setProductName("");
      setProductPrice("");
    }
  };

  return (
    <div className="container">
      <h1>Add product</h1>
      <form className="form" onSubmit={handleAddtoCart}>
        <label htmlFor="ProductName">ProductName</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <label htmlFor="ProductPrice">Price</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
        />
        <button className="btn-submit" type="submit">
          Add to cart
        </button>
      </form>
      <Cart products={cartItems} setProducts={setCardItems} />
    </div>
  );
}
