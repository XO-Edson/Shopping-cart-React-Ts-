import Products from "../components/Products";
import useProduct from "../hooks/useProducts";

const Store = () => {
  const { productsState } = useProduct();

  return (
    <div>
      {productsState.map((product) => {
        return <Products key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Store;
