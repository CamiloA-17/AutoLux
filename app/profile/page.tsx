import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "This is the place to see the user's profile"
}

export default function profile() {
  return (
    <div>This is my profile</div>
  )
}
