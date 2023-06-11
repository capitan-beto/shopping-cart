import { useEffect, useState } from "react";
import { ProductType, fetchItems } from "../services/items"

export const useFetchItems = (url: string) => {
    const [items, setItems] = useState<ProductType[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(false)
  
    useEffect(() => {
        fetchItems(url)
          .then(items => setItems(items))
          .catch(() => setError(true))
          .finally(() => setIsFetching(false));
    }, [])
  
    return { items, isFetching, error };
}

  