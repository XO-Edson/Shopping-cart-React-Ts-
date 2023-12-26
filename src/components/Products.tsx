import { ProductsItem } from "../context/ProductsProvider";

const Products = ({ product }: { product: ProductsItem }) => {
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.imgUrl} alt="" />
      </div>

      <h2>{product.name}</h2>
      <h2>${product.price}</h2>
    </div>
  );
};

export default Products;
