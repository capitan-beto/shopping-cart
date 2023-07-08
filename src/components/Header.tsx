import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
          <h1>White Lodge Store</h1>
          <nav>
            <ul className="flex gap-3">
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/Products" >Products</Link>
                </li>   
                <li>
                    <Link to="/Cart" >
                      <span className="material-symbols-outlined py-2 text-xl">
                        shopping_cart
                      </span>
                      <span className={styles.lblCartCount} id='lblCartCount'>6</span>
                    </Link>
                </li>
            </ul>
          </nav>
        </div>
    )
}

export default Header;