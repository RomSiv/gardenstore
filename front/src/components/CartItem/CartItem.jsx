import React from "react";
import s from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { deleteItemAction, incrementAction, decrementAction } from "../../reducers/cartReducer";




export default function CartItem({ id, title, image, count, price, discont_price }) {

const dispatch = useDispatch()

const current_price = discont_price === null ? price : <del>{price * count}</del>
const current_discont_price = discont_price === null ? '' : discont_price * count
const discont = Math.round((price - discont_price) / (price / 100))


  return (
    <div className={s.item}>
      <p 
      className={s.delete_btn}
      onClick={()=> dispatch(deleteItemAction(id))}
      >X</p>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p className={s.title}>{title}</p>
        <div className={s.count}>
          <div 
          className={s.btn}
          onClick={()=> dispatch(decrementAction(id))}
          >-</div>
          <p>{count}pc</p>
          <div 
          className={s.btn}
          onClick={()=> dispatch(incrementAction(id))}
          >+</div>
        </div>
      </div>
      <div className={s.price}>
        <p>{current_price}</p>
        <p className={s.discont}>{discont_price !== null ? `-${discont}%` : " "}</p>
        <p>{current_discont_price}</p>
      </div>
    </div>
  );
}

//todo сделать съэкономленые!
