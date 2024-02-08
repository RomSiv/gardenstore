import React from 'react'
import { useDispatch } from 'react-redux'
import { sortByCategoryProductsAction } from '../../../reducers/productsByCategoryReducer'
import s from './SortByCategoryForm.module.css'

export default function SortByCategoryForm() {

    const dispatch = useDispatch()

    const sort = e => dispatch(sortByCategoryProductsAction(e.target.value))

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
