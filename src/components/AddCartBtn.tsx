import { v4 as uuidv4 } from "uuid";
import useCart from "../hooks/useCart";

const AddCartBtn = ({ id, title, price }: { id: number, title: string, price: number }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart( uuidv4(), id, title, price )}>
        Add to cart 🛒
    </button>
  )
}

export default AddCartBtn