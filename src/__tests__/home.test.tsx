import { render, screen, waitFor } from "@testing-library/react";
import Home from "../components/Home";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Item } from "../interfaces/interfaces";
import CartProvider from "../context/CartProvider";

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

const products: Item[] = [
    { id: 1, title: "C3PO Golden Airpods", transactionID: "abcd", price: 1234 },
    { id: 2, title: "Bender Bending Rodríguez Left Arm", transactionID: "efgh", price: 4321 }
];

describe('Home component', () => { 
    it("Should display loading page", async () => {
        mockFetch.mockResolvedValue({ json: () => Promise.resolve(products)} as any);
        render(
            <CartProvider>
                <Home />
            </CartProvider>
        , { wrapper: BrowserRouter })

        await waitFor(() => {
            expect(screen.getByRole("img").textContent).toMatchSnapshot;
        })
    });

    it("Should display product name", async () => {
        mockFetch.mockResolvedValue({ json: () => Promise.resolve(products) } as any);
        act(() => render(<Home />, { wrapper: BrowserRouter }));

        expect(await screen.findByText(/C3PO Golden Airpods/i)).toBeInTheDocument();

    });

    it("Should display error message", async () => {
        mockFetch.mockRejectedValue(() => Promise.reject("API ERROR"));

        act(() => render(<Home />, { wrapper: BrowserRouter }))

        expect(await screen.findByText(/sorry, something went wrong/i)).toBeInTheDocument();
    })
})
