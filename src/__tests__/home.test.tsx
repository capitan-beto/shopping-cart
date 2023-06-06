import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn();

const mockFetch = fetch as jest.MockedFunction<typeof fetch>;


describe('Home component', () => { 
    it("should display loading page", async() => {
        mockFetch.mockResolvedValue({
            json: () => Promise.resolve([
                { id: 1, title: "bebeto" },
                { id: 2, title: "queonda" }
            ])
        } as any);
        await act(() => render(<Home />));
    
        expect(screen.getByRole("heading").textContent).toMatch(/...loading/i)
    });
 })

// global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve([
//         { id: 1, title: "bebeto" },
//         { id: 2, title: "queonda" }
//     ])
// } as any))

// describe('test', () => { 
//     it("should load", async () => {
//         await act(() => render(<Home />))
//         expect(screen.getByText(/...loading/i)).toBeInTheDocument();
//     })
//  })