import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStartAsync } from "../../store/categories/categories.action";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoryPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
