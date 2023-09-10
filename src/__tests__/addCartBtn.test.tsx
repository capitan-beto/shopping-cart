import { fireEvent, render, screen } from "@testing-library/react"
import CartProvider from "../context/CartProvider"
import AddCartBtn from "../components/AddCartBtn"

jest.mock('uuid', () => ({ v4: () => "1234566789"}));

describe('Add to cart button test', () => { 
    it("should display add to cart icon", () => {
        render(
            <CartProvider>
                <AddCartBtn id={3} title={"test"} price={320}/>
            </CartProvider>
        )

        expect(screen.getByText(/add_shopping_cart/i)).toBeInTheDocument();
    })

    it("should display confirmation icon when item added", () => {
        render(
            <CartProvider>
                <AddCartBtn id={3} title={"test"} price={320}/>
            </CartProvider>
        )
        
        const button = screen.getByText(/add_shopping_cart/i);
        fireEvent.click(button);
        expect(screen.getByText(/done/i)).toBeInTheDocument();
    })
 })