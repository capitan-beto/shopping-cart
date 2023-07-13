import { Link } from "react-router-dom";

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
        <Link to={`${id}`} className="block overflow-hidden group">
          <div className="overflow-hidden w-full bg-white">
            <img
              src={image}
              alt={description}
              className="m-auto h-[350px] w-3/5 object-scale-down transition duration-500 group-hover:scale-105 sm:h-[450px] bg-white" 
            />
          </div>
          <div className="relative pt-3">
            <h3
              className="text-xs py-1 text-white-700 truncate group-hover:underline underline-offset-[5px]"
            >
              {title}
            </h3>
            <p className="mt-2">
              <span className="sr-only text-white"> Regular Price </span>
              <span className="tracking-wider text-white-900"> £{price} </span>
            </p>
          </div>
        </Link>
      </li>
  )
}

export default ProductPreview;