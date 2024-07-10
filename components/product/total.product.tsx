import { useCartStore } from "@/store/cart.store"

const TotalProduct = () => {

const getTotalItems = useCartStore((state) => state.getTotalItems())
const gettotalPrice = useCartStore((state) => state.getTotalPrice())

  return (
    <div>
      <p>total Items: {getTotalItems}</p>
      <p>total price: {gettotalPrice}</p>
    </div>
  )
}

export default TotalProduct
