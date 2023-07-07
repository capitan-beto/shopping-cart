import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
          <h1>White Lodge Store</h1>
          <nav>
            <ul>
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/Products" >Products</Link>
                </li>
                <li>
                    <Link to="/Cart" >Cart</Link>
                </li>
            </ul>
          </nav>
        </div>
    )
}

export default Header;