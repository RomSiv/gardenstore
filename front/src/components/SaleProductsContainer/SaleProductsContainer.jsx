import React from 'react'
import SaleProduct from '../SaleProduct/SaleProduct'
import { useSelector } from 'react-redux'
import s from './SaleProductsContainer.module.css'

export default function SaleProductsContainer() {

  const saleProducts = useSelector(state => state.saleProducts)

  return (
    <div className={s.container}>
        {
          saleProducts
          .filter(el => el.show_product)
          .map(el => <SaleProduct key={el.id} {...el}/>)
        }
    </div>
  )
}
