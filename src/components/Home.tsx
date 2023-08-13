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
        <div className="grid grid-rows-[35vh_auto] gap-3 bg-[url('https://residentsound.files.wordpress.com/2021/04/twin-peaks-flooring.jpeg?w=1024')]">
          <div className="grid place-content-center gap-[1em]">
            <h2 className="uppercase text-[3vh text-center p-[.5em] bg-black">Welcome to white lodge <br></br> leader in quality clothes</h2>
            <h2 className="italic text-[3vh] text-center p-[.5em] bg-black">"Our style is what defines us"</h2>
          </div>
          <HomeBanner items={items}/>
        </div>
      </>
  )
  
}

export default Home;





