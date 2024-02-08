import React from "react";
import s from "./ProductsByCategoryCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAcrion } from "../../reducers/cartReducer";

export default function ProductsByCategoryCard({
  id,
  image,
  title,
  price,
  discont_price,
}) {
  const dispatch = useDispatch();

  const discont = Math.round((price - discont_price) / (price / 100));

  return (
    <div className={s.category_item}>
      <Link to={`/products/${id}`}>
        <img src={`http://localhost:3333/${image}`} alt={title} />
      </Link>
      <div className={s.item_description}>
        <div className={s.prices}>
          <p className={s.discont_price}>
            {discont_price !== null ? `$${discont_price}` : `$${price}`}
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
          dispatch(
            addToCartAcrion({ id: +id, image, title, price, discont_price })
          )
        }
      >
        Add to cart
      </div>
    </div>
  );
}
