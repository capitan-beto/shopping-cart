import { createContext } from "react";
import { CartState } from "../interfaces/interfaces";

export type CartContextProps = {
    cartState: CartState;
    removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);