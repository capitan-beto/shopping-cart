import { useReducer } from "react";
import { CartState } from "../interfaces/interfaces";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE: CartState = {
  cartCount: 0,
  items: []
}

export type propsType = {
  children: JSX.Element | JSX.Element[]
}

const CartProvider = ({ children }: propsType) => {

  const [cartState, dispatch] = useReducer( cartReducer, INITIAL_STATE );

  const removeFromCart = (id: number) => {
    dispatch({ type: "removeFromCart", payload: { id } })
  }

  const addToCart = (id: number, title: string) => {
    dispatch({ type: "addToCart", payload: { id, title} })
  }

  return (
    <CartContext.Provider value={{
      cartState,
      removeFromCart,
      addToCart
    }}>
        { children }
    </CartContext.Provider>
  )
}

export default CartProvider