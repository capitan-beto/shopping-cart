import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import CartProvider from "../context/CartProvider";

test("Full app rendering/navigating", () => {
    render(
        <CartProvider>
            <Header />
        </CartProvider>
    , {wrapper: BrowserRouter});

    expect(screen.getByText(/white lodge store/i)).toBeInTheDocument();
})
