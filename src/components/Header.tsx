import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import useCart from "../hooks/useCart";

const Header = () => {
  const { cartCount } = useCart();

    return (
        <div className={styles.container}>
          <h1>White Lodge Store</h1>
          <nav>
            <ul className="flex gap-3">
                  <div className="flex gap-3">
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
                        <li className="w-20">
                          <p className="flex justify-center ml-2">
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
            </ul>
          </nav>
        </div>
    )
}

export default Header;