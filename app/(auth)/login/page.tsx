import { Metadata } from "next"
import { Login } from '@/components/screeens/Login';

export const metadata: Metadata = {
  title: "Login",
  description: "This is my login.",
}

export default function LoginForm() {
  return (
    <>
        <Login/>
    </>
  )
}