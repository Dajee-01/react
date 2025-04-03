import React, { useState } from "react";
import "./Cart.css";
import { data } from "../../dataset/data.js";

export default function Cart() {
  const [totalNoOfProduct, settotalNoOfProduct] = useState(data.length);
  const [product, setProduct] = useState(data);
  const handleDeleteAll = () => {
    setProduct([]);
    settotalNoOfProduct(0);
  };
  const handleDelete = (id) => {
    const updateProducts = product.filter((x) => x.id != id);
    setProduct(updateProducts);
    settotalNoOfProduct(updateProducts.length);
  };
  const handleReset = () => {
    setProduct(data);
    settotalNoOfProduct(product.length);
  };
  return (
    <div className="cards">
      <h1>Item in carts:{totalNoOfProduct}</h1>
      {product.map((product) => {
        return (
          <div className="card" key={product.id}>
            <p>
              {product.name},Rs{product.price}
            </p>
            <button
              className="btn-delete"
              onClick={() => {
                handleDelete(product.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      ;<button onClick={handleDeleteAll}>DeleteAll</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
