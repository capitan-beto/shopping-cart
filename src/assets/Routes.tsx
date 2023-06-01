import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import Cart from "../components/Cart";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;