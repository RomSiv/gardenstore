import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AllCategoriesPage from "./pages/AllCategoriesPage/AllCategoriesPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import SingleCategoryPage from "./pages/SingleCategoryPage/SingleCategoryPage";
import CartPage from "./pages/CartPage/CartPage";
import SalePage from "./pages/SalePage/SalePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { getAllCategories } from "./requests/categories_req";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, getSaleProducts } from "./requests/products_req";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories);
    dispatch(getAllProducts);
    dispatch(getSaleProducts);
  }, [dispatch]);

  return (
    <div className="App">
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<AllCategoriesPage />} />
          <Route path="/categories/:id" element={<SingleCategoryPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
