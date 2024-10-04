  'use client';
  import { colorTextWhite } from "../tokens";
  import { useForm, SubmitHandler } from "react-hook-form";
  import { createUser } from "@/libs/api";

  type Inputs = {
    name: string;
    id: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  export function Register() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      const { name, id, email, password } = data;
      
      const add_user = await createUser(id, { name, email, password });
    };

    const password = watch("password");

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#212121] w-[500px] h-[670px] rounded-[30px]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2
              className={`mt-5 text-center text-2xl font-extrabold leading-9 tracking-tight ${colorTextWhite}`}
            >
              Register
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="full-name"
                  className={`block text-sm font-medium leading-6 ${colorTextWhite}`}
                >
                  Nombre Completo
                </label>
                <div className="mt-2">
                  <input
                    {...register("name", { required: true })}
                    id="full-name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-sm">Nombre requerido</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="id"
                  className={`block text-sm font-medium leading-6 ${colorTextWhite}`}
                >
                  Cedula
                </label>
                <div className="mt-2">
                  <input
                    {...register("id", { required: true })}
                    id="id"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-sm">Nombre requerido</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium leading-6 ${colorTextWhite}`}
                >
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
                {errors.email && (
                  <span className="text-red-500 text-sm">Correo requerido</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium leading-6 ${colorTextWhite}`}
                >
                  Contraseña
                </label>
                <div className="mt-2">
                  <input
                    {...register("password", { required: true })}
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">Contraseña requerida</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className={`block text-sm font-medium leading-6 ${colorTextWhite}`}
                >
                  Confirmar contraseña
                </label>
                <div className="mt-2">
                  <input
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === password || "Las contraseñas no coinciden",
                    })}
                    id="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-[#424242] px-3 py-1.5 text-sm font-extrabold leading-6 ${colorTextWhite} shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  Register
                </button>
              </div>
            </form>

            <p className={`mt-10 text-center text-sm ${colorTextWhite}`}>
              ¿Ya tienes cuenta?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Iniciar Sesión
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
