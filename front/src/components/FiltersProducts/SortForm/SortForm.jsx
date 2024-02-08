import React from 'react'
import { useDispatch } from 'react-redux'
import { sortAllProductsAction } from '../../../reducers/allProductsReducer'
import s from './SortForm.module.css'

export default function SortForm() {

    const dispatch = useDispatch()

    const sort = e => dispatch(sortAllProductsAction(e.target.value))

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

// todo вызывает ошибку