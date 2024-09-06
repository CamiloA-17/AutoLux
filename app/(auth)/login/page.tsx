import { Metadata } from "next"
import './style.css'

export const metadata: Metadata = {
  title: "Login",
  description: "This is my login.",
}

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#212121] w-[500px] h-[450px] rounded-[30px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl font-extrabold leading-9 tracking-tight text-[#EEEEEE]">
            Login
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-extrabold font-medium leading-6 text-[#EEEEEE]">
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-extrabold font-medium leading-6 text-[#EEEEEE]">
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#424242] px-3 py-1.5 text-sm font-extrabold leading-6 text-[#EEEEEE] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-[#EEEEEE]">
            ¿No tienes cuenta?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </>
  )
}