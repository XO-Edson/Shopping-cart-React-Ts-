import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { initProductContext } from "../context/ProductsProvider";

const useProduct = (): initProductContext => {
  return useContext(ProductsContext);
};

export default useProduct;
