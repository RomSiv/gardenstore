import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import s from './ProductsContainer.module.css'

export default function ProductsContainer({ products }) {
  return (
    <div className={s.container}>
    {
      products
      .filter(el => el.show_product)
      .map(el => <ProductCard key={el.id} {...el}/>)
    }    
    </div>
  )
}
