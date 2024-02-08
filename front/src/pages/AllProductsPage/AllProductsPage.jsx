import React from "react";
import { useSelector } from "react-redux";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import SortForm from "../../components/FiltersProducts/SortForm/SortForm";
import FIlterForm from "../../components/FiltersProducts/FIlterForm/FIlterForm";
import DiscountProductForm from "../../components/FiltersProducts/DiscountProductForm/DiscountProductForm";
import s from './AllProductsPage.module.css'

export default function AllProductsPage() {
  const products = useSelector((state) => state.products);

  return (
    <div className={s.products_page}>
      <h1>All products</h1>
      <div className={s.filters}>
      <FIlterForm />
      <DiscountProductForm />
      <SortForm />
      </div>
      <ProductsContainer products={products} />
    </div>
  );
}
