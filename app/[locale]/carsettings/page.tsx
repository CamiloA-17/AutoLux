import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Car Config",
  description: "This is the place to configure the car"
}

export default function car_settings () {
  return (
    <div>This is my car config</div>
  )
}
