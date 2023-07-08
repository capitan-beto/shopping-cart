import { useReducer } from "react";
import { CartState } from "../interfaces/interfaces";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE: CartState = {
  items: []
}

export type propsType = {
  children: JSX.Element | JSX.Element[]
}

const CartProvider = ({ children }: propsType) => {

  const [cartState, dispatch] = useReducer( cartReducer, INITIAL_STATE );

  const removeFromCart = (transactionID: string) => {
    dispatch({ type: "removeFromCart", payload: { transactionID } })
  }

  const addToCart = (transactionID: string, id: number, title: string) => {
    dispatch({ type: "addToCart", payload: { transactionID, id, title} })
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