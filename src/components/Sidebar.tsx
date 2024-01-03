import useCart from "../hooks/useCart";
import Cart from "./Cart";

const Sidebar = () => {
  const { showCart, cartItems, handleContainerClick } = useCart();

  return (
    <div
      className="sidebar-container"
      onClick={handleContainerClick}
      style={showCart ? { width: "100%" } : { width: "0" }}
    >
      <div className="sidebar">
        {cartItems.map((item) => {
          return <Cart key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
