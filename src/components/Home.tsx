import Header from "./Header"
import { useFetchItems } from "../hooks/useFetchItems";

const Home = () => {
  const { items, isFetching} = useFetchItems();

  if (isFetching) {
    return <p>...loading</p>;
  }

  return (
      <>
        <Header />
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