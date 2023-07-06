type singleProductType = {
  product: {
    id: number,
    image: string,
    description: string,
    title: string,
    price: number
  }
}

const ProductPreview = ({ product }: singleProductType) => {
  const { id, image, description, title, price } = product;

  return (
      <li>
        <a href={`products/${id}`} className="block overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src={image}
              alt={description}
              className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]" 
            />
          </div>
          <div className="relative pt-3">
            <h3
              className="text-xs text-gray-700 truncate bg-white group-hover:underline"
            >
              {title}
            </h3>
            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>
              <span className="tracking-wider text-gray-900"> £{price} </span>
            </p>
          </div>
        </a>
      </li>
  )
}

export default ProductPreview;