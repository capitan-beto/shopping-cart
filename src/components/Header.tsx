import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import useCart from "../hooks/useCart";
import { useState } from "react";

const Header = () => {
  const { cartCount } = useCart();
  const [title, setTitle] = useState(false);

    return (
        <div className={styles.container}>
          <div className={styles.brandContainer}>
            <Link to="/">
              <img src="/owl-white-lodge.jpg" alt="logo"
                className={styles.image}
                onMouseEnter={() => setTitle(true)}
                onMouseLeave={() => setTitle(false)}
              />
            </Link>
            <h1 className={title ? styles.title : styles.titleOff}>White Lodge Store</h1>
          </div>
          <nav>
            <ul className="flex">
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