import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
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
        <NavBar />
      </div>
    )
}

export default Header;