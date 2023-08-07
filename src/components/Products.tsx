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
      <div 
        className="bg-[url('https://residentsound.files.wordpress.com/2021/04/twin-peaks-flooring.jpeg?w=1024')] py-3 px-2 mb-3"
      >
        <h2 className="w-fit bg-black px-4 border-white border-4">Our catalogue</h2>
      </div>
      <div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden ">
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