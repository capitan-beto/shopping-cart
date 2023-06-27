import styles from "../styles/home.module.css"

const ProductDisplay = ({ product }: any) => {
  return (
      <div>
        <li key={product.id}>
          <a href="#" className="block overflow-hidden group">
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.description}
                className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]" 
              />
            </div>
            <div className="relative pt-3">
              <h3
                className="text-xs text-gray-700 truncate bg-white group-hover:underline"
              >
                {product.title}
              </h3>
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
                <span className="tracking-wider text-gray-900"> £{product.price} </span>
              </p>
            </div>
          </a>
        </li>
    </div>
  )
}

export default ProductDisplay;