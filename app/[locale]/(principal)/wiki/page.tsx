import { Metadata } from "next"
import { Comments } from "@/components/organism/comments"
import { AdminBody } from "@/components/organism/AdminBody"

export const metadata: Metadata = {
  title: "car wiki",
  description: "This is the place to put the information abput a car"
}

export default function Car_wiki () {
  return (
    <div><Comments /></div>
  )
}
