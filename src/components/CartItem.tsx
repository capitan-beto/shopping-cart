import useCart from "../hooks/useCart"

type PropsType = {
  item : {
    id: number
    title: string
  }
}

const CartItem = ({ item }: PropsType) => {
  const { removeFromCart } = useCart();
  const { id, title } = item;

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