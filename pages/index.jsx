import { useDispatch } from "react-redux"
import { addItem } from '../store/cart.slice'

const Home = ({ products }) => {
  const dispatch = useDispatch()
  return (
    <>
      <h1 className="text-2xl text-center">Store</h1>
      <div className="grid grid-cols-4 mt-8 place-items-center gap-y-8">
        {products.map(product => (
          <div key={product.id} className="border border-zinc-700 w-72 p-4 rounded-md">
            <h3>{product.title}</h3>
            <div  className="mt-4 h-60 w-full overflow-hidden bg-center bg-cover" style={{backgroundImage: `url(${product.images[0]})`}}>
            </div>
            <button 
              className="w-full bg-blue-400 rounded-sm hover:bg-sky-700 transition-colors mt-10 h-12"
              onClick={() => dispatch(addItem(product))}
            >
              Add to Cart
            </button>
          </div>
        ) 
        )}
      </div>
    </>
  )

}

export default Home

export const getServerSideProps = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const { products } = await response.json()
  return {
    props: {
      products
    }
  }
}