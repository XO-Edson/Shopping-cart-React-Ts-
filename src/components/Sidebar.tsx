import useCart from "../hooks/useCart";

const Sidebar = () => {
  const { showCart, cartItems, handleContainerClick } = useCart();

  return (
    <div
      className="sidebar-container"
      onClick={handleContainerClick}
      style={showCart ? { width: "100%" } : { width: "0" }}
    >
      <div className="sidebar"></div>
    </div>
  );
};

export default Sidebar;
