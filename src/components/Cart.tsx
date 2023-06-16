import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Header from "./Header"
import CartItem from "./CartItem";

const Cart = () => {

    const { cartState } = useContext( CartContext );
    const { items } = cartState;

    return (
        <>
          <Header />
          <h1>Welcome to the Cart page</h1>
          <ul>
            { items.map( item => <CartItem item={item} key={ item.id }/> )}
          </ul>
        </>
    )
}

export default Cart;