import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "This is the home page"
}

export default function home() {
  return (
    <div>This is my home</div>
  )
}
