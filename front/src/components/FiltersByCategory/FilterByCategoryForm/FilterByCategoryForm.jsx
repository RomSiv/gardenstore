import React from 'react'
import { useDispatch } from "react-redux";
import { filterByCategoryProductsAction } from '../../../reducers/productsByCategoryReducer';
import s from './FilterByCategoryForm.module.css'

export default function FilterByCategoryForm() {
    
    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault();
        const { min, max } = e.target;
        const min_value = min.value || 0
        const max_value = max.value || Infinity
        dispatch(filterByCategoryProductsAction({ min_value, max_value }))
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
