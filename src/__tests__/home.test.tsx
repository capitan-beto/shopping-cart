import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;


describe('Home component', () => { 
    it("should display loading page", async() => {
        mockFetch.mockResolvedValue({
            json: () => Promise.resolve([
                { id: 1, title: "C3PO Golden Airpods" },
                { id: 2, title: "Bender Bending Rodríguez Left Arm" }
            ])
        } as any);
        act(() => render(<Home />, {wrapper: BrowserRouter}));
    
        expect(screen.getByRole("heading").textContent).toMatch(/...loading/i)
    });

    it("Should display product name", async () => {
        mockFetch.mockResolvedValue({
            json: () => Promise.resolve([
                { id: 1, title: "C3PO Golden Airpods" },
                { id: 2, title: "Bender Bending Rodríguez Left Arm" }
            ])
        } as any);
        await act(() => render(<Home />, {wrapper: BrowserRouter}));

        expect(screen.getByText(/C3PO Golden Airpods/i)).toBeInTheDocument();

    })
 })
