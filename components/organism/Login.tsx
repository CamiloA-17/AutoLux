'use client';
import { Metadata } from "next"
import { colorTextWhite } from "../tokens";
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  email: string;
  password: string;

}

export function Login() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    const body = {
      user: data.email,
      pass: data.password
    }
  }

  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#212121] w-[500px] h-[450px] rounded-[30px]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className={`mt-5 text-center text-2xl font-extrabold leading-9 tracking-tight ${colorTextWhite}`}>
              Login
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className={`block text-sm  font-medium leading-6 ${colorTextWhite}`}>
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", { required: true })}
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="example@example.com"
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                  Contraseña
                </label>
                <div className="mt-2">
                  <input
                    {...register("password", { required: true })}
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-[#424242] px-3 py-1.5 text-sm font-extrabold leading-6 ${colorTextWhite} shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  Login
                </button>

            </form>

            <p className={`mt-10 text-center text-sm ${colorTextWhite}`}>
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
