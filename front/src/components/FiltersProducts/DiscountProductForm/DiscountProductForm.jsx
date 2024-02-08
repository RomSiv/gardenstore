import React from 'react'
import { useDispatch } from 'react-redux'
import { discontedProductsAction } from '../../../reducers/allProductsReducer'
import { useState } from 'react'
import s from './DiscountProductForm.module.css'

export default function DiscountProductForm() {
  
    const dispatch = useDispatch()

    const [ checkboxChecked, setCheckboxChecked ] = useState(false)

    const handleChange = () => setCheckboxChecked(!checkboxChecked)

    const get_discounted_products = e => dispatch(discontedProductsAction(e.target.checked))
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
