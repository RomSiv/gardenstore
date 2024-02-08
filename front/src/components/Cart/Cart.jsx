import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import s from "./Cart.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/emprycart.png";
import { useForm } from "react-hook-form";
import { priceOff } from "../../requests/products_req";

export default function Cart() {
  const cart_state = useSelector((state) => state.cart);

  const total = cart_state.reduce((acc, { price, discont_price, count }) => {
    const true_price = discont_price ? discont_price : price;
    return acc + true_price * count;
  }, 0);

  const total_saving = cart_state
    .reduce((acc, { price, discont_price, count }) => {
      const price_whith_discont = discont_price ? price - discont_price : "";
      return acc + price_whith_discont * count;
    }, 0)
    .toFixed(2);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const submit = (data) => {
    priceOff(data);
    reset();
  };

  const getDiscount = register("5%off", {
    pattern: {
      value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
    },
  });

  return (
    <div className={s.cart}>
      <h3>Shopping cart</h3>
      <Link to="/">
        <div className={s.to_store_btn}>Back to the store</div>
      </Link>
      {total === 0 ? (
        <img src={logo} alt="emprycart" className={s.empry_cart} />
      ) : (
        <div className={s.items}>
          <div>
            {cart_state.map((el) => (
              <CartItem key={el.id} {...el} />
            ))}
          </div>

          <div className={s.order}>
            <p className={s.details}>Order details</p>
            <div className={s.total}>
              <p>Total</p>
              <p>${total}</p>
            </div>

            <form action="">
              <input
                className={s.input}
                type="text"
                placeholder="Phone number"
                name="5%off"
                {...getDiscount}
              />
              {errors.discount && (
                <p className={s.error}>{errors.discount.message}</p>
              )}
              <div className={s.order_btn} onClick={handleSubmit(submit)}>
                Order
              </div>
            </form>
            <p className={s.saved}>
              {total_saving > 0 ? `You save $${total_saving} ` : " "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
