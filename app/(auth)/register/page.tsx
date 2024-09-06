import { Metadata } from "next"
import './style.css'

export const metadata: Metadata = {
  title: "Register",
  description: "This is the place to register the users"
}

export default function register() {
  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#212121] w-[500px] h-[670px] rounded-[30px]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className="mt-5 text-center text-2xl font-extrabold leading-9 tracking-tight text-[#EEEEEE]">
              Register
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-extrabold font-medium leading-6 text-[#EEEEEE]">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-extrabold font-medium leading-6 text-[#EEEEEE]">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-extrabold font-medium leading-6 text-[#EEEEEE]">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-extrabold font-medium leading-6 text-[#EEEEEE]">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#424242] px-3 py-1.5 text-sm font-extrabold leading-6 text-[#EEEEEE] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-[#EEEEEE]">
              ¿Ya tienes cuenta?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Iniciar Sesión
              </a>
            </p>
          </div>

        </div>
    </>
  )
}
