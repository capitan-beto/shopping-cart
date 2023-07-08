import useCart from "../hooks/useCart";

const AddCartBtn = ({ transactionID, id, title }: {transactionID: string, id: number, title: string}) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart( transactionID, id, title )}>
        Add to cart 🛒
    </button>
  )
}

export default AddCartBtn