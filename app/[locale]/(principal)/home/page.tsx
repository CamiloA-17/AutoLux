import { About, Slide , Adorno} from '@/components'

export default function HomeContent() {
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
