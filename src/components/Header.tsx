import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Welcome to "White Lodge" Store</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/items" >Items</Link>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Header;