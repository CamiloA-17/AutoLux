import { Metadata } from "next"
import { About, Slide , Adorno} from '@/components'

export const metadata: Metadata = {
  title: "Home",
  description: "This is the home page"
}

export default function home() {
  return (
    <div className="my-10">
      <Slide />
      <Adorno />
      <main className="w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 justify-center">
        <About />
      </main>
    </div>
  )
}
