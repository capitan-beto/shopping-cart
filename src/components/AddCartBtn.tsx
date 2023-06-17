
const AddCartBtn = ({ id, title }: {id: number, title: string}) => {
  const handleClick = () => {
    console.log(id, title)
  }

  return (
    <button onClick={handleClick}>
        Add to cart 🛒
    </button>
  )
}

export default AddCartBtn