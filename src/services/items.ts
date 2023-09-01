export const fetchItems = (url: string) => {
    return fetch(url)
    .then(res => res.json())
    .catch(err => {
        throw new Error(err)
    });
}
  