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
                        Home
                      </li>
                    </Link>
                    <Link to="/Products" >
                      <li>
                        Products
                      </li>
                    </Link>
                      <Link to="/Cart" >
                        <li>
                          <span className="material-symbols-outlined py-2 text-xl">
                            shopping_cart
                          </span>
                          <span className={styles.lblCartCount} id='lblCartCount'>
                            {cartCount}
                          </span>
                        </li>
                      </Link>
                  </div>
            </ul>
          </nav>
        </div>
    )
}

export default Header;