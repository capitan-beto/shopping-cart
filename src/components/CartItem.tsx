import useCart from "../hooks/useCart";

type PropsType = {
  item : {
    transactionID: string,
    title: string,
    price: number,
    id: number
  }
}

const CartItem = ({ item }: PropsType) => {
  const { removeFromCart } = useCart();
  const { transactionID, title, price, id } = item;

  return (
    <tr style={{ cursor: "pointer"}}
      onDoubleClick={ () => removeFromCart(transactionID) }
    >
      <td>{ id }</td>
      <td>{ title }</td>
      <td>${ price }</td>
    </tr>
  )
}

export default CartItem;