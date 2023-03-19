import React from "react";

const ProductCard = ({ key, id, img, title, price, handler }) => (
  <div className="card" key={key}>
    <img src={img} alt="" />
    <h4 className="card-text">{title}</h4>
    <h5>Price: ${price}</h5>
    <button
      className="btn"
      onClick={() => {
        handler({ key, id, img, title, quantity: 1, price });
      }}
    >
      Add to cart
    </button>
  </div>
);

export default ProductCard;
