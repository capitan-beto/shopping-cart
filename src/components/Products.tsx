import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
import ProductDisplay from "./ProductDisplay";
import styles from "../styles/products.module.css";

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
        <div>
            <Header />
            <h1>Our catalog</h1>
          <div className={styles.container}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {
                items.map(product => {
                  return (
                    <div>
                      <ProductDisplay product={product} key={product.id}/>
                    </div>
                  )
                })
              }
            </ul>
          </div>
        </div>
  )
}

export default Products;