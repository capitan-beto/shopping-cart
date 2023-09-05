import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import useCart from "../hooks/useCart";

const NavBar = () => {
  const { cartCount } = useCart();

  return (
    <div>
        <nav>
          <div className="flex">
            <Link to="/" >
              <li>
                <p>Home</p>
              </li>
            </Link>
            <Link to="/Products" >
              <li>
                <p>Products</p>
              </li>
            </Link>
            <Link to="/Cart" >
              <li className="w-10">
                <p className="flex justify-center ml-2 m-0">
                  <span className="material-symbols-outlined py-2 text-xl">
                    shopping_cart
                  </span>
                  <span className={styles.lblCartCount}>
                    {cartCount}
                  </span>
                </p>
              </li>
            </Link>
          </div>
        </nav>
    </div>
  )
}

export default NavBar;