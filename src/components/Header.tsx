import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/store">
          <li>Store</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
      </ul>
    </header>
  );
};
