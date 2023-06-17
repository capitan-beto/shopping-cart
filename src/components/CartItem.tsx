import useCart from "../hooks/useCart"
import { props } from "../interfaces/interfaces";

const CartItem = ({ item }: props) => {
  const { removeFromCart } = useCart();

  return (
    <div style={{
      cursor: "pointer",
      textDecoration: item.id !== 1 ? "line-through" : ""
    }}>
        <li onDoubleClick={() => removeFromCart(item.id) }>
            { item.title }
        </li>
    </div>
  )
}

export default CartItem