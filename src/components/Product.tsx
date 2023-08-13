import { useParams } from "react-router-dom";
import {useFetchSingleItem} from "../hooks/useFetchSingleElement";
import Header from "./Header";
import AddCartBtn from "./AddCartBtn";
import LoadingPage from "./LoadingPage";

const Product = () => {
  const { productId } = useParams();
  const { item, isFetching, error} = useFetchSingleItem(`https://fakestoreapi.com/products/${productId}`);

  if (isFetching) {
    return <LoadingPage />
  }

  if (error) {
    return (
      <>
        <Header />
        <h1>Sorry, something went Wrong</h1>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="grid mx-3 gap-[10%] md:flex justify-around">
        <div className="grid content-start gap-3 max-w-[95%] md:max-w-[50%]">
          <h1 className="mb-3">{ item?.title }</h1>
          <p className="text-justify first-letter:capitalize">{ item?.description }</p>
          <h3 className="capitalize"> Category: { item?.category }</h3>
          <p>${ item?.price }</p>
          <div>
            { item && <AddCartBtn id={ item.id } title={ item.title } price={ item.price } /> }
          </div>
        </div>
        <img src={ item?.image } alt={ item?.description } className="object-scale-down md:max-w-[50%] m-auto md:m-0 aspect-square"/>
      </div>
    </>
  )
}

export default Product;