import Header from "./Header"
import { useFetchItems } from "../hooks/useFetchItems";

const Home = () => {
  const { items, isFetching} = useFetchItems();

  if (isFetching) {
    return <h1>...loading</h1>;
  }

  return (
      <>
        <Header />
        <h1>Popular Products</h1>
        <ul>
          {
            items.map(product => {
              return (
                <li key={product.id}>
                  <span>{product.id}</span>
                  <span>{product.title}</span>
                </li>
              )
            })
          }
        </ul>
      </>
  )
  
}

export default Home;