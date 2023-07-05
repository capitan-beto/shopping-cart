import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
import ProductDisplay from "./ProductPreview";

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
          <h1 className="text-3xl font-bold underline">Popular Products</h1>
          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {
              items.map(product => {
                return (
                  <ProductDisplay product={product} key={product.id}/>
                )
              })
            }
          </ul>
        </div>
      </>
  )
  
}

export default Home;





