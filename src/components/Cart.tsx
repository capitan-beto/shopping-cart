import Header from "./Header";
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";

const Cart = () => {
    const { items, cartCount } = useCart();

    return (
      <>
        <Header />
        <h1>Welcome to the Cart page</h1>
        <h3>Items on cart: {cartCount}</h3>
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { items.map(item => {
              return (
                <CartItem item={ item } key={ items.indexOf(item) }/>
              )
            })}
          </tbody>
        </table>
      </>
    )
}

export default Cart;