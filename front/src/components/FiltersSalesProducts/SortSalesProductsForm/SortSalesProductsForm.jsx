import React from 'react'
import { sortProductsOfSaleAction } from '../../../reducers/saleReducer'
import s from './SortSalesProductsForm.module.css'
import { useDispatch } from 'react-redux'

export default function SortSalesProductsForm() {

  const dispatch = useDispatch()

  const sort = e => dispatch(sortProductsOfSaleAction(e.target.value))
  
  return (
        <div className={s.sort_form}>
    <label>
        <p>Sorted</p>
    <select onInput={sort}>
        {/* <option disabled selected>---</option> */} 
        <option value="title">By alphabet A-Z</option>
        <option value="price_asc">By price ASC</option>
        <option value="price_desc">By price DESC</option>
    </select>
    </label>
</div>

  )
}
