import React from 'react'
import dwarf from '../../images/dwarf.png'
import s from './Order.module.css'
import { useForm } from "react-hook-form";
import { priceOff } from "../../requests/products_req";

export default function Order() {

  const { handleSubmit, register, reset, formState: { errors }} = useForm({ mode: "onChange" });

  const submit = data => {
    priceOff(data)
    reset()
  };

  const getDiscount = register("5%off", {
    pattern: {
    value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
    },
  });

  return (
    <div className={s.order}>
        <img src={ dwarf } alt="dwarf" />
        <div className={s.form}>
            <h1>5% off</h1>
            <h3>on the first order</h3>
            <form>
            <input
            type="text" name="5%off" placeholder="+49" {...getDiscount}
          />
           {errors.discount && (
            <p className={s.error}>{errors.discount.message}</p> )}
                <div className={s.btn} onClick={handleSubmit(submit)} >Get a discount</div>
            </form>
        </div>
    </div>
  )
}
