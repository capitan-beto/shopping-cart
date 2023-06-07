import { useEffect, useState } from "react";
import { ProductType, fetchItems } from "../services/items"

export const useFetchItems = () => {
    const [items, setItems] = useState<ProductType[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(false)
  
    useEffect(() => {
        fetchItems()
          .then(items => setItems(items))
          .catch(() => setError(true))
          .finally(() => setIsFetching(false));
    }, [])
  
    return { items, isFetching, error };
}

  