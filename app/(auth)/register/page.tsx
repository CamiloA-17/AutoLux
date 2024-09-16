import { Metadata } from "next"
import { Register } from '@/components';


export const metadata: Metadata = {
  title: "Register",
  description: "This is the place to register the users"
}

export default function register() {
  return (
    <>
      <Register/> 
    </>
  )
}
