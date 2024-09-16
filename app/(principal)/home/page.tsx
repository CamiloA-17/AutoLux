import { Metadata } from "next"
import {About} from '@/components'

export const metadata: Metadata = {
  title: "Home",
  description: "This is the home page"
}

export default function home() {
  return (
    <main className="w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 justify-center">
      <About />
    </main>
  )
}
