import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

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
    <tr>
      <td>{ id }</td>
      <td>
          <Link to={`/Products/${id}`}>
          { title } 
          </Link>
      </td>
      <td>${ price }</td>
      <td onClick={ () => removeFromCart(transactionID) }>
      <span className="material-symbols-outlined cursor-pointer">
        remove_shopping_cart
      </span>
      </td>
    </tr>
  )
}

export default CartItem;