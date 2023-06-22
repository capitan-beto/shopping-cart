import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";

const Home = () => {
  const { items, isFetching, error } = useFetchItems('https://fakestoreapi.com/products?limit=5');

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
        <div className="container">
          <h1>Popular Products</h1>
          <ul>
            {
              items.map(product => {
                return (
                  <li key={product.id}>
                    <img src={product.image} alt="" />
                    <span>{product.price}</span>
                    <span>{product.description}</span>
                    <span>{product.title}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </>
  )
  
}

export default Home;





