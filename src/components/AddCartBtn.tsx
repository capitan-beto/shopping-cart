import { v4 as uuidv4 } from "uuid";
import useCart from "../hooks/useCart";

const AddCartBtn = ({ id, title, price }: { id: number, title: string, price: number }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart( uuidv4(), id, title, price )}
      className="flex items-center m-3 px-5 py-3 gap-3 bg-zinc-900 rounded-full hover:bg-zinc-800 border-2"
    >
      <p>Add to cart</p>
      <span className="material-symbols-outlined">
        add_shopping_cart
      </span>
    </button>
  )
}

export default AddCartBtn