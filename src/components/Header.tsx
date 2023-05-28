import { Link, useLocation } from "react-router-dom";

const Header = () => {
    let location = useLocation();

    if (location.pathname === "/") return (
        <div>
            <h1>Welcome to White Lodge Store</h1>
            <nav>
                <ul>
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <Link to="/Items">Items</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )

    else if (location.pathname === "/Items") return (
        <div>
            <h1>Welcome to White Lodge Store</h1>
            <nav>
                <ul>
                    <li>
                      <Link to="/" >Home</Link>
                    </li>
                    <li>
                      <p>Items</p>
                    </li>
                    <li>
                        <Link to="/Cart" >Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

    return (
        <div>
          <h1>Welcome to White Lodge Store</h1>
          <nav>
            <ul>
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/Items" >Items</Link>
                </li>
                <li>
                    <p>Cart</p>
                </li>
            </ul>
          </nav>
        </div>
    )
}

export default Header;