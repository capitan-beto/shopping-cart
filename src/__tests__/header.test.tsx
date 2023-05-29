import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

test("Full app rendering/navigating", async () => {
    render(<Header />, {wrapper: BrowserRouter});

    expect(screen.getByText(/welcome to white lodge/i)).toBeInTheDocument();
})
