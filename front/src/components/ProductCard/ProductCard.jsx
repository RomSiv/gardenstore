import React from "react";
import { Link } from "react-router-dom";
import s from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCartAcrion } from "../../reducers/cartReducer";

export default function ProductCard({
  id,
  title,
  image,
  price,
  discont_price,
}) {
  const dispatch = useDispatch();

  const discont = Math.round((price - discont_price) / (price / 100));

  return (
    <div className={s.card}>
      <Link to={`/products/${id}`}>
        <img src={`http://localhost:3333${image}`} alt={title} />
      </Link>

      <div className={s.item_description}>
        <div className={s.prices}>
          <p className={s.discont_price}>{discont_price !== null ? `$${discont_price}` : `$${price}`}
          </p>
          <p className={s.price}>
            {discont_price !== null ? <del>${price}</del> : ""}
          </p>
          <p className={s.discont}>
            {discont_price !== null ? `-${discont}%` : " "}
          </p>
        </div>
        <p>{title}</p>
      </div>

      <div
        className={s.add_btn}
        onClick={() =>
          dispatch(addToCartAcrion({ id, image, title, price, discont_price }))
        }
      >
        Add to cart
      </div>
    </div>
  );
}
