import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
// import ProductDisplay from "./ProductPreview";
import LoadingPage from "./LoadingPage";
import HomeBanner from "./HomeBanner";

const Home = () => {
  const { items, isFetching, error } = useFetchItems('https://fakestoreapi.com/products?limit=6');

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
        <div className="container">
          <h1 className="text-2xl font-bold ">Welcome to the white lodge, leader in quality clothes</h1>
          <h3>Checkout our popular items</h3>
          {/* <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {
              items.map(product => {
                return (
                  <ProductDisplay product={product} key={product.id}/>
                )
              })
            }
          </ul> */}
          <HomeBanner items={items}/>
        </div>
      </>
  )
  
}

export default Home;





