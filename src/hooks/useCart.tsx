import { useContext } from "react";
import shoppingCartContext, { CartContext } from "../context/CartProvider";

const useCart = (): CartContext => {
  return useContext(shoppingCartContext);
};

export default useCart;
