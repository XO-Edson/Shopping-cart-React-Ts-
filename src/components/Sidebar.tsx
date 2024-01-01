import useCart from "../hooks/useCart";

const Sidebar = () => {
  const { showCartfn, showCart, cartItems } = useCart();

  return (
    <div
      className="sidebar-container"
      onClick={showCartfn}
      style={showCart ? { width: "100%" } : { width: "-100%" }}
    >
      <div className="sidebar"></div>
    </div>
  );
};

export default Sidebar;
