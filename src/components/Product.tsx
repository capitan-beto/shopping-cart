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
      <div>
        <h1>{item?.title}</h1>
        <h2>{item?.description}</h2>
        <p>{item?.category}</p>
        <p>{item?.price}</p>
        <img src={item?.image} alt={item?.description} className="h-[30em]"/>
        { item && <AddCartBtn id={item.id} title={item.title} price={item.price}/> }
      </div>
    </>
  )
}

export default Product;