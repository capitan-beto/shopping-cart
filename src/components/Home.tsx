import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
import LoadingPage from "./LoadingPage";
import HomeBanner from "./HomeBanner";
import styles from "../styles/home.module.css";

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
        <div className="grid grid-rows-[35vh_auto] gap-3">
          <div className={styles.container}>
            <h2 className="uppercase">Welcome to white lodge <br></br> leader in quality clothes</h2>
            <h2 className="italic">"Our style is what defines us"</h2>
          </div>
          <HomeBanner items={items}/>
        </div>
      </>
  )
  
}

export default Home;





