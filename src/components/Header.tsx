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
                        <Link to="/Products">Products</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )

    else if (location.pathname === "/Products") return (
        <div>
            <h1>Welcome to White Lodge Store</h1>
            <nav>
                <ul>
                    <li>
                      <Link to="/" >Home</Link>
                    </li>
                    <li>
                      <p>Products</p>
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
                  <Link to="/Products" >Products</Link>
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