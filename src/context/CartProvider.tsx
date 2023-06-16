import { useReducer } from "react";
import { CartState } from "../interfaces/interfaces";
import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

const INITIAL_STATE: CartState = {
  cartCount: 1,
  items: [
    {
      id: 1,
      title: "test"
    }
  ]
}

type props = {
    children: JSX.Element | JSX.Element[]
}

const CartProvider = ({ children }: props) => {

  const [cartState, dispatch] = useReducer( cartReducer, INITIAL_STATE );

  const removeFromCart = (id: number) => {
    dispatch({ type: "removeFromCart", payload: { id } })
  }

  return (
    <CartContext.Provider value={{
      cartState,
      removeFromCart
    }}>
        { children }
    </CartContext.Provider>
  )
}

export default CartProvider