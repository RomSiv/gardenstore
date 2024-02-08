import React from 'react'
import { useDispatch } from 'react-redux'
import { discontedByCategoryProductsAction } from '../../../reducers/productsByCategoryReducer'
import { useState } from 'react'
import s from './DiscountByCategoryForm.module.css'

export default function DiscountByCategoryForm() {
    
    const dispatch = useDispatch()

    const [ checkboxChecked, setCheckboxChecked ] = useState(false)

    const handleChange = () => setCheckboxChecked(!checkboxChecked)

    const get_discounted_products = e => dispatch(discontedByCategoryProductsAction(e.target.checked))
    return (

    <div className={s.discount_form}>
        <label>
            <p>Discounted items</p>
            <input type="checkbox" 
            checked={checkboxChecked}
            onChange={handleChange}
            onClick={get_discounted_products}
             />
        </label>
    </div>
  )
}
