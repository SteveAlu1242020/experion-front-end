import React, { useState } from "react";

const ProductCard = ({ props }) => {
  const [selectProduct, setSelectProduct] = useState(false);
  return (
    <div className="product-card">
      <div className="item">
        <img src={props.image} alt={props.alt} />
        <div className="description">
          <p>{props.title}</p>
          <p>{props.category}</p>
          <p>Rs.{props.price}</p>
        </div>
        <div className="add-to-cart">
          <button
            onClick={() => {
              setSelectProduct(!selectProduct);
            }}
            className={selectProduct ? "active" : ""}>
            {selectProduct ? "Added To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
