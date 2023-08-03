import { v4 as uuidv4 } from "uuid";
import useCart from "../hooks/useCart";
import { useState } from "react";

const AddCartBtn = ({ id, title, price }: { id: number, title: string, price: number }) => {
  const [cartAction, setCartAction] = useState<string>("add_shopping_cart");
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart( uuidv4(), id, title, price );
    setCartAction("done");
    setTimeout(() => setCartAction("add_shopping_cart"), 500);
  }

  return (
    <button onClick={() => handleClick()}
      className="flex items-center my-3 px-5 py-3 gap-3 bg-zinc-900 rounded-full hover:bg-zinc-800 border-2"
    >
      <p>Add to cart</p>
      <span className="material-symbols-outlined">
        {cartAction}
      </span>
    </button>
  )
}

export default AddCartBtn;