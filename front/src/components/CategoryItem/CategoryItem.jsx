import React from 'react'
import s from './CategoryItem.module.css'
import { Link } from 'react-router-dom'

export default function CategoryItem({ id, image, title }) {
  return (
    <div className={s.category_item}>
    <Link to={`/categories/${id}`}>
      <img src={ image  && `http://localhost:3333${image}`} alt={ title } />
      </Link>
      <Link to={`/categories/${id}`}>
        <p>{ title }</p>
    </Link>
    </div>
  )
}


