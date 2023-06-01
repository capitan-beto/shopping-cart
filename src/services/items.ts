export type ProductType = {
    id: number,
    title: string,
    price: number, 
    category: string,
    description: string,
    image: string;
}

export const fetchItems = () => {
    return fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .catch(err => {
        throw new Error(err)
    });
}
  