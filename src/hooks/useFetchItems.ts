import { useEffect, useState } from "react";

type ProductType = {
    id: number,
    title: string,
    price: number, 
    category: string,
    description: string,
    image: string;
  }
  
export const useFetchItems = () => {
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

  