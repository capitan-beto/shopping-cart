import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Header /> }>
                </Route>
                <Route path="/items" element={ <h1>Items</h1> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;