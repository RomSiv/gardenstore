import React from "react";
import NewSeason from "../../components/NewSeason/NewSeason";
import SaleProduct from "../../components/SaleProduct/SaleProduct";
import s from "./MainPage.module.css";
import Order from "../../components/Order/Order";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

export default function MainPage() {
  const categories_store = useSelector((state) => state.categories);
  const saleProducts = useSelector((state) => state.saleProducts);

  return (
    <div className={s.main_page}>
      <NewSeason />

      <div className={s.catalog_and_btn}>
        <h3>Catalog</h3>
        <Link to="/categories">
          <div>All categories</div>
        </Link>
      </div>

      <div className={s.categories_container}>
        {categories_store
          .map((el) => <CategoryItem key={el.id} {...el} />)
          .slice(0, 4)}
      </div>

      <Order />

      <Link to="/sale">
        <h3>Sale</h3>
      </Link>
      
      <div className={s.sale_products_cantainer}>
        {saleProducts
          .map((el) => <SaleProduct key={el.id} {...el} />)
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)}
      </div>
    </div>
  );
}
