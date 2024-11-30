'use client';
import { colorTextWhite } from "../tokens";
import { useForm, SubmitHandler } from "react-hook-form";
import { getCookie } from 'typescript-cookie';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from "next/navigation";
import backgroundImage from '../../app/assets/images/backgroundReg.png';
import { useTranslations } from "next-intl";
import { LanguageSelector } from "../molecules/Language";
import { postData } from "@/services/api";
import type { Register, RegisterResponse } from "@/types/api";

type Inputs = {
  name: string;
  lastName: string;
  id: string;
  email: string;
  birthdate: string;
  password: string;
  confirmPassword: string;
};

export function Register() {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState<string | null>(null);

  const t = useTranslations("Register");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokenFromCookie = getCookie('token');
      setToken(tokenFromCookie || null);

      if (tokenFromCookie) {
        const userId = getCookie('userId');
        if (pathname.startsWith('/register')) {
          router.replace(`/profile/${userId}`);
        }
      }
    }
  }, [router, pathname]);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const calculateAge = (birthdate: string): number => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log('Edad:', age);

    return age;
  };

  //   const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //     const { name, id, email, password } = data;
  //     const defaultRoleId = "1";

  //     const { success, message } = await createUser(name, id, email, password, defaultRoleId);

  //     if (success) {
  //         console.log('Usuario creado exitosamente:', message);
  //         router.push('/login');
  //     } else {
  //         console.error('Error al crear el usuario:', message);
  //         alert(message);   
  //     }
  // };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, lastName, birthdate, id, email, password } = data;
    const age = calculateAge(birthdate);
    const defaultRoleId = 2;

    try {
      const registerUser = await postData<Register, RegisterResponse>('/auth/register', {
        id,
        name,
        last_name: lastName,
        email,
        age,
        password,
        role_id: defaultRoleId,
      });

      router.push('/login');
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  if (token) {
    return <p>Redirigiendo...</p>;
  }

  const password = watch("password");

  return (
    <div
      className="flex min-h-screen flex-1 flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >

      <div className="mb-10">
        <LanguageSelector />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#212121] w-[500px] h-[670px] rounded-[30px] bg-opacity-80">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className={`mt-5 text-center text-2xl font-extrabold leading-9 tracking-tight ${colorTextWhite}`}>
            {t("register")}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="full-name" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("name")}
              </label>
              <div className="mt-2">
                <input
                  {...register("name", { required: "Nombre requerido" })}
                  id="full-name"
                  type="text"
                  autoComplete="name"
                  placeholder="John"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="last_name" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("last_name")}
              </label>
              <div className="mt-2">
                <input
                  {...register("lastName", { required: "Apellido requerido" })}
                  id="last_name"
                  type="text"
                  autoComplete="last_name"
                  placeholder="Doe"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="birthdate" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("birth_date")}
              </label>
              <div className="mt-2">
                <input
                  {...register("birthdate", { required: "Fecha de nacimiento requerida" })}
                  id="birthdate"
                  type="date"
                  autoComplete="bday"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.birthdate && (
                <span className="text-red-500 text-sm">{errors.birthdate.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="id" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("id")}
              </label>
              <div className="mt-2">
                <input
                  {...register("id", { required: "Cédula requerida" })}
                  id="id"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.id && (
                <span className="text-red-500 text-sm">{errors.id.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("email")}
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: "Correo requerido" })}
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="example@example.com"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("password")}
              </label>
              <div className="mt-2">
                <input
                  {...register("password", { required: "Contraseña requerida" })}
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="confirm-password" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("confirm_password")}
              </label>
              <div className="mt-2">
                <input
                  {...register("confirmPassword", {
                    required: "Confirmación requerida",
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
                {t("register")}
              </button>
            </div>
          </form>

          <p className={`mt-10 text-center text-sm ${colorTextWhite}`}>
            {t("already_account")}{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {t("login")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
