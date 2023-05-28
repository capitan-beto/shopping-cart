import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Items from "../components/Items";
import Cart from "../components/Cart";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Items" element={<Items />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;