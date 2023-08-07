import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const useCart = () => {
    const { cartState, removeFromCart, addToCart } = useContext(CartContext);
    const { items } = cartState;

    return {
        items: items,
        cartCount: items.length,
        cartTotal: items.map(x => x.price).reduce((a, b) => a + b, 0),
        removeFromCart, 
        addToCart
    }
}

export default useCart;