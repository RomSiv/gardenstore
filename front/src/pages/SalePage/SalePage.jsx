import React from 'react'
import SaleProductsContainer from '../../components/SaleProductsContainer/SaleProductsContainer'
import FilterSalesProductsForm from '../../components/FiltersSalesProducts/FilterSalesProductsForm/FilterSalesProductsForm'
import SortSalesProductsForm from '../../components/FiltersSalesProducts/SortSalesProductsForm/SortSalesProductsForm'
import s from './SalePage.module.css'


export default function SalePage() {
  return (
    <div className={s.sale_page}>
      <h1>Products with sale</h1>
      <div className={s.filters}>
      <FilterSalesProductsForm />
      <SortSalesProductsForm />
      </div>
      <SaleProductsContainer />
    </div>
  )
}
