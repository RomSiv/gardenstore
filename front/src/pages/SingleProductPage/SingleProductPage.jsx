import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../requests/products_req";
import s from "./SingleProductPage.module.css";
import { addToCartAcrion } from '../../reducers/cartReducer'

export default function SingleProductPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => dispatch(getSingleProduct(id)), [id, dispatch]);

  const product = useSelector((state) => state.product);

  const { title, price, image, discont_price, description } = product;

  const discont = Math.round((price - discont_price) / (price / 100));

  const current_price = discont_price === null ? price : <del>{price}</del>

  return (
    <div className={s.page}>
      <h1>{title}</h1>
      <div className={s.item}>
        <img src={`http://localhost:3333/${image}`} alt={title} />
        <div className={s.item_description}>
          <p className={s.price}>${current_price}</p>
          <p className={s.discont}>{discont_price !== null ? `-${discont}%` : " "}</p>
          <p className={s.discont_price}>{discont_price !== null ? `$${discont_price}` : " "}</p>
          <div 
          className={s.to_card_btn}
          onClick={()=> dispatch(addToCartAcrion({ id: +id, image, title, current_price, discont_price }))}
          >To cart</div>
          <div>Description: <p>{description}</p></div>  
        </div>
      </div>
    </div>
  );
}
