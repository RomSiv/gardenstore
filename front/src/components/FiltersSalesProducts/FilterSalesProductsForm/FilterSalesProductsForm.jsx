import React from 'react'
import { useDispatch } from "react-redux";
import { filterProductsOfSaleAction } from '../../../reducers/saleReducer';
import s from './FilterSalesProductsForm.module.css'

export default function FilterSalesProductsForm() {

    const dispatch = useDispatch()

 const submit = e => {
        e.preventDefault();
        const { min, max } = e.target;
        const min_value = min.value || 0
        const max_value = max.value || Infinity
        dispatch(filterProductsOfSaleAction({ min_value, max_value }))
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
