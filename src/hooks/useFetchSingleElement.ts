import { useEffect, useState } from "react";
import { ProductType, fetchItems } from "../services/items";

export const useFetchSingleItem = (url: string) => {
    const [item, setItems] = useState<ProductType>();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
        fetchItems(url)
          .then(items => setItems(items))
          .catch(() => setError(true))
          .finally(() => setIsFetching(false))
    }, [])
  
    return { item, isFetching, error };
}

 