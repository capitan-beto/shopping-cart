import Header from "./Header";
import { useFetchItems } from "../hooks/useFetchItems";
import ProductPreview from "./ProductPreview";
import LoadingPage from "./LoadingPage";

const Products = () => {
  const { items, isFetching, error} = useFetchItems('https://fakestoreapi.com/products');

  if (isFetching) {
    return (
      <LoadingPage/>
    )
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
      <h1 className="px-3">Our catalog</h1>
      <div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
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