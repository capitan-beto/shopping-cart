import useCart from "../hooks/useCart"
import { props } from "../interfaces/interfaces";

const CartItem = ({ item }: props) => {
  const { removeFromCart } = useCart();
  const { id, title } = item

  return (
    <div style={{
      cursor: "pointer",
    }}>
        <li onDoubleClick={() => removeFromCart(id) }>
            { title }
        </li>
    </div>
  )
}

export default CartItem