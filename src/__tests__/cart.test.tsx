import {render, screen} from "@testing-library/react";
import CartProvider from "../context/CartProvider";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";

describe("Cart component test", () => {
    it("should display cart initial state", () => {
        render(
            <CartProvider>
                <Cart />
            </CartProvider>
            , { wrapper: BrowserRouter}
        );

        expect(screen.getByText(/seems that you haven't add anything to the cart!/i)).toBeInTheDocument();
    })
})