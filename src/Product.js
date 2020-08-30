import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ cart, user }, dispatch] = useStateValue();

  const addToCart = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id,
          title,
          image,
          price,
          rating,
        },
      });
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <Link to={!user && "/login"}>
        <button className="add" onClick={addToCart}>
          Add to cart
        </button>
      </Link>
    </div>
  );
}

export default Product;
