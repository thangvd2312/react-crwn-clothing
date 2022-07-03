import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data.js";

export const ProductContext = createContext({
  products: [],
});
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
