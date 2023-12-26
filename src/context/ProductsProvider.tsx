import { ReactNode, createContext, useState } from "react";
import storeItems from "../data/productsData.json";

export type ProductsItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export type initProductContext = {
  productsState: ProductsItem[];
};

const initproductsState: initProductContext = { productsState: [] };

export const ProductsContext =
  createContext<initProductContext>(initproductsState);

type ProductsProviderProps = {
  children: ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products] = useState<ProductsItem[]>(storeItems);
  return (
    <ProductsContext.Provider value={{ productsState: products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
