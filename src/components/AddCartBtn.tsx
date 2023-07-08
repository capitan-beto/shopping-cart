import { v4 as uuidv4 } from "uuid";
import useCart from "../hooks/useCart";

const AddCartBtn = ({ id, title }: { id: number, title: string}) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart( uuidv4(), id, title )}>
        Add to cart 🛒
    </button>
  )
}

export default AddCartBtn