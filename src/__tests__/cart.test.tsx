import { render, screen} from "@testing-library/react";
import CartProvider from "../context/CartProvider";
import Cart from "../components/Cart";
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

describe("Cart component test", () => {
    it("should display cart initial state", () => {
        render(
            <CartProvider>
                <Cart />
            </CartProvider>, 
            { wrapper: BrowserRouter}
        );

        expect(screen.getByText(/seems that you haven't add anything to the cart!/i)).toBeInTheDocument();
    });

    it("should display single item", () => {
        const testItem = [
            {title: "c3po", price: 1234, transactionID: "abv123", id: 1}
        ];

        customRender(<Cart />, props(testItem));
        expect(screen.getByText(/c3po/i)).toBeInTheDocument();
    })

    it("should display several items", () => {
        const testItems = [
            {title: "c3po", price: 1234, transactionID: "abv123", id: 1},
            {title: "r2d2", price: 4321, transactionID: "321vba", id: 2},
        ];

        customRender(<Cart />, props(testItems));
        expect(screen.getByText(/c3po/i)).toBeInTheDocument();
        expect(screen.getByText(/r2d2/i)).toBeInTheDocument();
    })
})