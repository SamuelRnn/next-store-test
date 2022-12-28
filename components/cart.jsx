import { useDispatch, useSelector } from "react-redux"
import { deleteItem } from "../store/cart.slice"

const Cart = ({ display }) => {
  const items = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div 
    hidden={!display}
    className="fixed bottom-0 bg-neutral-900 w-72 h-full p-4 border-r border-r-zinc-700"
    >
      <h2>Cart</h2>
      <div className="flex flex-col h-full mt-12 gap-y-4">
        {items.length ?
          items.map(item => (
            <div key={item.id} className="border border-slate-700 flex justify-between px-2 rounded gap-2">
              <div className="py-2">
                <h2>{item.title}</h2>
                <p className="text-sm opacity-60 font-mono">$ {item.price}</p>
              </div>
              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="w-8 h-8 self-center bg-red-500 rounded-md"
              >X</button>
            </div>
          ))
        :
        <p className="text-center opacity-60">There&apos;s no items in your car</p>
        }
      </div>
    </div>
  )
}

export default Cart