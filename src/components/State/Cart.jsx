import React, { useEffect, useState } from "react";
import "./Cart.css";
import { data } from "../../dataset/data.js";

export default function Cart({ products, setProducts }) {
  const [totalNoOfProduct, settotalNoOfProduct] = useState(products.length);

  useEffect(() => {
    settotalNoOfProduct(products.length);
  }, [products]);

  const handleDeleteAll = () => {
    setProducts([]);
  };
  const handleDelete = (id) => {
    const updateProducts = products.filter((x) => x.id != id);
    setProducts(updateProducts);
  };
  if (products.length === 0) {
    return <h1>card is Empty</h1>;
  }
  return (
    <div className="cards">
      <h1>Item in carts:{totalNoOfProduct}</h1>
      {products.map((product) => {
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
    </div>
  );
}
