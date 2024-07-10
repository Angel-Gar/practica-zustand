import { userBearsStore } from "@/store/bears.store"

const CountBear = () => {

    const bears = userBearsStore((state) => state.bears)

    return <div>CountBear: {bears}</div>
}

export default CountBear
