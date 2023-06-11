export type ProductType = {
    id: number,
    title: string,
    price: number, 
    category: string,
    description: string,
    image: string;
}

export const fetchItems = (url: string) => {
    return fetch(url)
    .then(res => res.json())
    .catch(err => {
        throw new Error(err)
    });
}
  