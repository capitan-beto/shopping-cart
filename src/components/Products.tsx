import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
import AddCartBtn from "./AddCartBtn";

const Products = () => {
  const { items, isFetching, error} = useFetchItems('https://fakestoreapi.com/products');

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
        <h1>Our catalog</h1>
        <ul>
          {
            items.map(product => {
              return (
                <li key={product.id}>
                  <span>{product.id}</span>
                  <span>{product.title}</span>
                  <AddCartBtn id={product.id} title={product.title}/>
                </li>
              )
            })
          }
        </ul>
      </>
  )
}

export default Products;