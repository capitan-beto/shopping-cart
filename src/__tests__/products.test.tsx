import { render, screen, waitFor } from "@testing-library/react";
import Products from "../components/Products";
import { BrowserRouter } from "react-router-dom";
import { ProductType } from "../interfaces/interfaces";
import CartProvider from "../context/CartProvider";

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

const products: ProductType[] = [
    { id: 1, title: "C3PO Golden Airpods", price: 1234, category: "Robot stuff", description: "Shiny robot stuff", image: "image.com/c3po"},
    { id: 2, title: "Bender Bending Rodríguez Left Arm" , price: 4321, category: "Robot stuff", description: "Shiny robot stuff",  image: "image.com/bender"}
];

describe("Products component", () => {
    it("should display loading page", async () => {
        mockFetch.mockResolvedValue({ json: Promise.resolve(products) } as any);
        render(
            <CartProvider>
                <Products />
            </CartProvider>,
            { wrapper: BrowserRouter }
        );

        await waitFor(() => {
            expect(screen.getByRole("img").textContent).toMatchSnapshot;
        });
    })

    it("should display display product name", async () => {
        mockFetch.mockResolvedValue({ json: () => Promise.resolve(products)} as any);
        render(
            <CartProvider>
                <Products />
            </CartProvider>,
            { wrapper: BrowserRouter }
        );

        expect(await screen.findByText(/c3po golden airpods/i))
            .toBeInTheDocument();
    })

    it("should display error message", async () => {
        mockFetch.mockRejectedValueOnce(() =>  Promise.reject("API ERROR"));
        render(
            <CartProvider>
                <Products />
            </CartProvider>,
            { wrapper: BrowserRouter }
        );

        expect(await screen.findByText(/sorry, something went wrong/i))
            .toBeInTheDocument();
    })
})