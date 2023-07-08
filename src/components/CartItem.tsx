import useCart from "../hooks/useCart"

type PropsType = {
  item : {
    transactionID: string,
    title: string
  }
}

const CartItem = ({ item }: PropsType) => {
  const { removeFromCart } = useCart();
  const { transactionID, title } = item;

  return (
    <div style={{
      cursor: "pointer",
    }}>
        <li onDoubleClick={() => removeFromCart(transactionID) }>
            { title }
        </li>
    </div>
  )
}

export default CartItem