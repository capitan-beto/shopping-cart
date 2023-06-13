import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

const products = [
    { id: 1, title: "C3PO Golden Airpods" },
    { id: 2, title: "Bender Bending Rodríguez Left Arm" }
];

describe('Home component', () => { 
    it("Should display loading page", () => {
        mockFetch.mockResolvedValue({ json: () => Promise.resolve(products)} as any);
        act(() => render(<Home />, { wrapper: BrowserRouter }));
    
        expect(screen.getByRole("heading").textContent).toMatch(/...loading/i);
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
