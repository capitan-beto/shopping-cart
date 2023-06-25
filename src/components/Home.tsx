import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
import styles from "../styles/home.module.css"

const Home = () => {
  const { items, isFetching, error } = useFetchItems('https://fakestoreapi.com/products?limit=6');

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
          <ul className={styles.homeBody}>
            {
              items.map(product => {
                return (
                  <li key={product.id} className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                      <img src={product.image} alt={product.description} />
                    </div>
                    <div className={styles.contentContainer}> 
                      <h2>{product.title}</h2>
                      <h3>Price: {product.price}</h3>
                      <p>{product.description}</p>
                    </div>
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





