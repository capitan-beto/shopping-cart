import { useParams } from "react-router-dom";
import {useFetchSingleItem} from "../hooks/useFetchSingleElement";
import Header from "./Header";

const Product = () => {
  const { productId } = useParams();
  const { item, isFetching, error} = useFetchSingleItem(`https://fakestoreapi.com/products/${productId}`);

  if (isFetching) {
    return <h1>...loading</h1>;
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
      </div>
    </>
  )
}

export default Product