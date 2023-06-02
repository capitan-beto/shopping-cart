import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Products from "../components/Products";

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