import { useContext } from "react"
import { Item } from "../interfaces/interfaces"
import { CartContext } from "../context/CartContext"

interface props {
    item: Item
}

const CartItem = ({ item }: props) => {

  const { removeFromCart } = useContext(CartContext)
  
  const handleDbClick = () => {
    removeFromCart(item.id)
  }

  return (
    <div style={{
      cursor: "pointer",
      textDecoration: item.id !== 1 ? "line-through" : ""
    }}>
        <li onDoubleClick={ handleDbClick }>
            { item.title }
        </li>
    </div>
  )
}

export default CartItem