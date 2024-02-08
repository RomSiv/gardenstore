import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem/CategoryItem";
import s from './CategoriesContainer.module.css'

export default function CategoriesContainer() {
  
    const categories_store = useSelector(state => state.categories);

  return ( 
  <div className={s.container}>
    {
        categories_store.map(el => <CategoryItem key={el.id} {...el} />)
    }
    </div>
    )
}
