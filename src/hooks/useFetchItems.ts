import { useEffect, useState } from "react";

type ProductType = {
    id: number,
    title: string,
    price: number, 
    category: string,
    description: string,
    image: string;
}

const fetchItems = () => {
    return fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .catch(err => {
        throw new Error(err)
    });
}
  
export const useFetchItems = () => {
    const [items, setItems] = useState<ProductType[]>([]);
    const [isFetching, setIsFetching] = useState(true);
  
    useEffect(() => {
        fetchItems()
          .then(items => setItems(items))
          .finally(() => setIsFetching(false));
    }, [])
  
    return { items, isFetching };
}

  