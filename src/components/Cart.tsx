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
            <div key={product.id} className="cart">
              <div className="cartItemImg">
                <img src={product.imgUrl} alt={product.name} />
              </div>

              <div className="cart-details">
                <div>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>

                <div className="total">
                  <h3>${product.price * item.quantity}</h3>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cart;
