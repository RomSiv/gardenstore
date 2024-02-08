import React from "react";
import { useDispatch } from "react-redux";
import { filterAllProductsAction } from "../../../reducers/allProductsReducer";
import s from './FilterForm.module.css'

export default function FIlterForm() {

    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault();
        const { min, max } = e.target;
        const min_value = min.value || 0
        const max_value = max.value || Infinity
        dispatch(filterAllProductsAction({ min_value, max_value }))
    }

  return (
    <form 
    className={s.filter}
    onSubmit={submit}>
      <p>Price</p>
      <input type="text" placeholder="min" name="min" />
      <input type="text" placeholder="max" name="max" />
      <button>Filter</button>
    </form>
  );
}
