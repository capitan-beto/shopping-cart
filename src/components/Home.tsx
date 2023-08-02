import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
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
          <div className="grid grid-cols-2 justify-items-start m-[5%]">
            <div>
              <h1>Check our most popular products and join to the white Lodge</h1>
              <h2>Our style is what defines us</h2>
            </div>
            <HomeBanner items={items}/>
          </div>
        </div>
      </>
  )
  
}

export default Home;





