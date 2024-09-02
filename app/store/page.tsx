import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store",
  description: "This is the place to sell the cars"
}

export default function store() {
  return (
    <div>This is my store</div>
  )
}
