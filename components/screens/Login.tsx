'use client';

import { colorTextWhite } from "../tokens";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validator/loginSchema";
import { useRouter, usePathname } from "next/navigation";
import { setCookie } from 'typescript-cookie';
import { useTranslations } from "next-intl";
import { LanguageSelector } from "../molecules/Language";
import { postData } from "@/services/api";
import type { Login, LoginResponse } from "@/types/api";
import { getUidFromToken } from "@/utils/decode_utils";
import backgroundImage from '../../app/assets/images/backgroundReg.png';

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const router = useRouter();
  const t = useTranslations("Login");

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const login = await postData<Login, LoginResponse>('/auth/login', data);
      setCookie('token', login.access_token);

      const user_id = getUidFromToken();

      if (!user_id) {
        console.error('No se pudo obtener el id del usuario');
      }
      
      router.replace(`/profile/${user_id}`);
    } catch (error) {
      console.error('Error durante el login:', error);
    }
  };

  return (
    <div
      className="flex min-h-screen flex-1 flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="flex flex-col justify-center items-center bg-[#212121] w-full max-w-[90%] sm:max-w-[500px] h-auto rounded-[30px] bg-opacity-80 px-4 sm:px-6 py-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className={`mt-5 text-center text-2xl font-extrabold leading-9 tracking-tight ${colorTextWhite}`}>
            {t("login")}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("email")}
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
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="password" className={`block text-sm font-medium leading-6 ${colorTextWhite}`}>
                {t("password")}
              </label>
              <div className="mt-2">
                <input
                  {...register("password", { required: true })}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
              </div>
            </div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-[#424242] px-3 py-1.5 text-sm font-extrabold leading-6 ${colorTextWhite} shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {t("login")}
            </button>
          </form>
          <p className={`mt-10 text-center text-sm ${colorTextWhite}`}>
            {t("not_account")}{' '}
            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {t("register")}
            </a>
          </p>
        </div>
      </div>
      <div className="fixed top-0 left-0 m-4">
        <LanguageSelector />
      </div>
    </div>
  );
}
