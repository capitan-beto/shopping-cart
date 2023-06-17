import useCart from "../hooks/useCart"

const AddCartBtn = ({ id, title }: {id: number, title: string}) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() =>addToCart(id, title)}>
        Add to cart 🛒
    </button>
  )
}

export default AddCartBtn