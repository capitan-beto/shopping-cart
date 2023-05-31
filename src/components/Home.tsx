import { useEffect, useState } from "react";
import Header from "./Header"

type ProductType = {
  id: number,
  title: string,
  price: number, 
  category: string,
  description: string,
  image: string;
}

const useFetchItems = () => {
  const [items, setItems] = useState<ProductType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(e => console.log(e))
      .finally(() => {
        setIsFetching(false);
      })
  }, [])

  return { items, isFetching };
}

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