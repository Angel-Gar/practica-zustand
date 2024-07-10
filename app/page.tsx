"use client"
import CountBear from "@/components/bear/CountBear"
import IncreaseButton from "@/components/bear/IncreaseButton"
import AddProduct from "@/components/product/add.product"
import ListProduct from "@/components/product/list.product"
import TotalProduct from "@/components/product/total.product"
import { userBearsStore } from "@/store/bears.store"
import { useCartStore } from "@/store/cart.store"
import { useEffect } from "react"

const HomePage = () => {

const bears = userBearsStore((state) => state.bears)

useEffect(() =>{
  useCartStore.persist.rehydrate();
}, [])

  return (
    <div>
      <h1>Home Page</h1>
      <p>Bears: {bears}</p>
      <CountBear />
      <IncreaseButton/>
      <AddProduct />
      <TotalProduct />
      <ListProduct />
    
    </div>
  )
}

export default HomePage
