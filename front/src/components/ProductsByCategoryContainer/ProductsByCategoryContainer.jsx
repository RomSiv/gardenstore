import React from 'react'
import ProductsByCategoryCard from '../ProductsByCategoryCard/ProductsByCategoryCard'
import s from './ProductsByCategoryContainer.module.css'

export default function ProductsByCategoryContainer({ products }) {
  return (
    <div className={s.container}>
        {
             products
            .filter(el => el.show_product)
            .map(el => <ProductsByCategoryCard key={el.id} {...el}/>)
        }
    </div>
  )
}
