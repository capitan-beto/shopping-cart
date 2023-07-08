import Header from "./Header"
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";

const Cart = () => {
    const { items, cartCount } = useCart();
    console.log(items);

    return (
      <>
        <Header />
        <h1>Welcome to the Cart page</h1>
        <h3>Items on cart: {cartCount}</h3>
        <ul>
          { items.map(item => <CartItem item={ item } key={ items.indexOf(item) }/> )}
        </ul>
      </>
    )
}

export default Cart;