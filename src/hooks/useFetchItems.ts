import { useEffect, useState } from "react";
import { ProductType, fetchItems } from "../services/items"

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

  