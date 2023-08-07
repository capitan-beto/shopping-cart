import Header from "./Header";
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";
import styles from "../styles/cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
    const { items, cartCount, cartTotal } = useCart();

    return (
      items.length > 0 ?
      <>
        <Header />
        <div 
        className="bg-[url('https://residentsound.files.wordpress.com/2021/04/twin-peaks-flooring.jpeg?w=1024')] py-3 px-2 mb-3"
        >
          <h2 className="w-fit bg-black px-4 border-white border-4">Cart</h2>
        </div>
        <h3>Items on cart: {cartCount}</h3>
        <h3>Cart total: ${cartTotal}</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Remove</th>
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
        <div 
        className="bg-[url('https://residentsound.files.wordpress.com/2021/04/twin-peaks-flooring.jpeg?w=1024')] py-3 px-2 mb-3"
        >
          <h2 className="w-fit bg-black px-4 border-white border-4">Cart</h2>
        </div>
        <h2>Seems that you haven't add anything to the cart!</h2>
        <h3>Check out our <Link to="/Products"
         className="hover:underline text-slate-400"
        > Catalogue</Link> and join to the White Lodge
        </h3>
      </>
    )
}

export default Cart;