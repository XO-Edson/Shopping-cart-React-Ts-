import { ProductsItem } from "../context/ProductsProvider";
import useCart from "../hooks/useCart";

const Products = ({ product }: { product: ProductsItem }) => {
  const { cartQuantity, addToCart, removeCart, deleteCart } = useCart();

  const quantity = cartQuantity(product.id);

  return (
    <div className="product">
      <div className="product-img">
        <img src={product.imgUrl} alt={product.name} />
      </div>

      <div className="item-info">
        <h2>{product.name}</h2>
        <h2>${product.price}</h2>
      </div>

      <div className="cart-buttons">
        {quantity === 0 ? (
          <button onClick={() => addToCart(product.id)}>+ Add to cart</button>
        ) : (
          <>
            <div className="operands">
              <button onClick={() => addToCart(product.id)}>+</button>
              <p> {quantity} in Cart</p>

              <button onClick={() => removeCart(product.id)}>-</button>
            </div>
            <button
              onClick={() => {
                deleteCart(product.id);
              }}
              className="remove"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
