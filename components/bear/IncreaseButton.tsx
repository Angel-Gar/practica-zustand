"use client"
import { userBearsStore } from "@/store/bears.store"

const IncreaseButton = () => {
const increaseBear = userBearsStore((state) => state.increasePopulation) 
  return (
    <button className="bg-black text-white px-4 py-2 rounded" onClick={increaseBear}>Increase bear</button>
  )
}

export default IncreaseButton
