import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsByCategory } from "../../requests/categories_req";
import s from "./SingleCategoryPage.module.css";
import ProductsByCategoryContainer from "../../components/ProductsByCategoryContainer/ProductsByCategoryContainer";
import FilterByCategoryForm from "../../components/FiltersByCategory/FilterByCategoryForm/FilterByCategoryForm";
import SortByCategoryForm from "../../components/FiltersByCategory/SortByCategoryForm/SortByCategoryForm";
import DiscountByCategoryForm from "../../components/FiltersByCategory/DiscountByCategoryForm/DiscountByCategoryForm";

export default function SingleCategoriesPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProductsByCategory(id)), [id, dispatch]);

  const products_by_category_state = useSelector(state => state.productsByCategory);

  const products = products_by_category_state?.data || []

  const current_category = products_by_category_state?.category?.title

  return (
    <div className={s.category_page}>
      <h1>{current_category}</h1>
      <div className={s.filters}>
        <FilterByCategoryForm />
        <DiscountByCategoryForm />
        <SortByCategoryForm />
      </div>
      <ProductsByCategoryContainer products={products} />
    </div>
  );
}
