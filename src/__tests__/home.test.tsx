import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

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
        render(<Home />);
    
        expect(screen.getByRole("heading").textContent).toMatch(/...loading/i)
    });
 })
