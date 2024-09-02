import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "This is the about page"
}

export default function page() {
  return (
    <div>This is my about</div>
  )
}
