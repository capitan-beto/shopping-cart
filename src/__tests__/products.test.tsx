import { render, screen } from "@testing-library/react";
import Products from "../components/Products";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

const products = [
    { id: 1, title: "C3PO Golden Airpods" },
    { id: 2, title: "Bender Bending Rodríguez Left Arm" }
]

describe("Products component", () => {
    it ("should display loading page", async () => {
        mockFetch.mockResolvedValue({ json: Promise.resolve(products) } as any);
        act(() => render (<Products />, { wrapper: BrowserRouter }));

        expect(await screen.findByText("...loading")).toBeInTheDocument();
    })

    it("should display display porduct name", async () => {
        mockFetch.mockResolvedValue({ json: () => Promise.resolve(products)} as any);

        act(() => render(<Products />, { wrapper: BrowserRouter }));

        expect(await screen.findByText(/c3po golden airpods/i)).toBeInTheDocument();
    })

    it("should display error message", async () => {
        mockFetch.mockRejectedValueOnce(() =>  Promise.reject("API ERROR"));

        act(() => render(<Products />, { wrapper: BrowserRouter })); 

        expect(await screen.findByText(/sorry, something went wrong/i)).toBeInTheDocument();
    })
})