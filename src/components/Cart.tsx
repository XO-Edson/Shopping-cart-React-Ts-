import { CartItem } from "../context/CartProvider";
import productsData from "../data/productsData.json";

type CartProps = {
  item: CartItem;
};

const Cart = ({ item }: CartProps) => {
  const id = item.id;

  return (
    <div>
      {productsData.map((product) => {
        if (product.id === id) {
          return (
            <div key={product.id}>
              <h1>{product.name}</h1>
              <img src={product.imgUrl} alt={product.name} />
              <p>{product.price}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cart;
