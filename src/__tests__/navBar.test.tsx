import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import CartProvider from "../context/CartProvider";
import { BrowserRouter } from "react-router-dom";
import { CartContext, CartContextProps } from "../context/CartContext";
import { Item } from "../interfaces/interfaces";

const customRender = (ui: JSX.Element, {cartState, addToCart, removeFromCart}: CartContextProps) => {
    return render(
        <CartContext.Provider value={{cartState, addToCart, removeFromCart}}>
            {ui}
        </CartContext.Provider>,
        {wrapper: BrowserRouter}
    )
}

const props = (items: Item[]) : CartContextProps => {
    return {
        cartState: {
            items
        },
        removeFromCart: () => null,
        addToCart: () => null
    }
}

describe("Navbar tests", () => {
    it("cart icon should display initial cart items count", () => {
        render(
            <CartProvider>
                <NavBar />
            </CartProvider>,
            {wrapper: BrowserRouter}
        )

        expect(screen.getByTestId("cart-icon")).toMatchSnapshot();
    })

    it("cart icon should display correct number of items", () => {
        const testItems = [
            {title: "c3po", price: 1234, transactionID: "abv123", id: 1},
            {title: "r2d2", price: 4321, transactionID: "321vba", id: 2},
        ];

        customRender(<NavBar />, props(testItems));
        expect(screen.getByTestId("cart-icon")).toMatchSnapshot();
    })
})