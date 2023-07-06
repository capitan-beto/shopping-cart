import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
import ProductPreview from "./ProductPreview";

const Products = () => {
  const { items, isFetching, error} = useFetchItems('https://fakestoreapi.com/products');

  if (isFetching) {
    return <h1>...loading</h1>;
  }

  if (error) {
    return (
      <>
        <Header />
        <h1>Sorry, something went Wrong</h1>
      </>
    )
  }

  return (
    <>
      <Header />
      <h1>Our catalog</h1>
      <div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {
            items.map(product => {
              return (
                <ProductPreview product={product} key={product.id}/>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Products;