import Header from "./Header";
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";
import styles from "../styles/cart.module.css";

const Cart = () => {
    const { items, cartCount } = useCart();

    return (
      items.length > 0 ?
      <>
        <Header />
        <h1>Welcome to the Cart page</h1>
        <h3>Items on cart: {cartCount}</h3>
        <table className={styles.table}>
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

      :

      <>
        <Header />
        <h1>Welcome to the Cart page</h1>
        <h3>Items on cart: {cartCount}</h3>
        <h2>Seems that you haven't add anything to cart!</h2>
      </>
    )
}

export default Cart;