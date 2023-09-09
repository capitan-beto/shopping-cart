import { render, screen, waitFor } from "@testing-library/react";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";
import { ProductType } from "../interfaces/interfaces";
import CartProvider from "../context/CartProvider";

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

const products: ProductType[] = [
    { id: 1, title: "C3PO Golden Airpods", price: 1234, category: "Robot stuff", description: "Shiny robot stuff", image: "image.com/c3po"},
    { id: 2, title: "Bender Bending Rodríguez Left Arm" , price: 4321, category: "Robot stuff", description: "Shiny robot stuff",  image: "image.com/bender"}
];

describe('Home component', () => { 
    it("Should display loading page", async () => {
        mockFetch.mockResolvedValue({ json: () => Promise.resolve(products)} as any);
        render(
            <CartProvider>
                <Home />
            </CartProvider>,
            { wrapper: BrowserRouter }
        );

        await waitFor(() => {
            expect(screen.getByRole("img").textContent).toMatchSnapshot;
        });
    });

    it("Should display product", async () => {
        mockFetch.mockResolvedValue({ json: () => Promise.resolve(products) } as any);
        render(
            <CartProvider>
                <Home />
            </CartProvider>,
            { wrapper: BrowserRouter }
        );

        await waitFor(() => {
            expect(screen.getByRole("img")).toMatchSnapshot;
        });
    });

    it("Should display error message", async () => {
        mockFetch.mockRejectedValue(() => Promise.reject("API ERROR"));
        render(
            <CartProvider>
                <Home />
            </CartProvider>,
            { wrapper: BrowserRouter }
        );

        expect(await screen.findByText(/sorry, something went wrong/i))
            .toBeInTheDocument();
    });
})
