import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer'
import Header from '../../components/Header/Header'
import s from './AllCategoriesPage.module.css'

export default function AllCategoriesPage() {
  
  return (
    <div className={s.category_page}>
      <Header />
      <CategoriesContainer />
    </div>
  )
}
