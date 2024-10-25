'use client';

import { colorTextWhite } from "../tokens";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validator/loginSchema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter, usePathname } from "next/navigation";
import { setCookie, getCookie } from 'typescript-cookie';
import { useEffect, useState } from 'react';
import backgroundImage from '../../app/assets/images/backgroundReg.png';
import { useTranslations } from "next-intl";
import { LanguageSelector } from "../molecules/Language";

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState<string | null>(null);

  const t = useTranslations("Login");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokenFromCookie = getCookie('token');
      setToken(tokenFromCookie || null);

      if (tokenFromCookie) {
        const userId = getCookie('userId');
        if (pathname.startsWith('/login')) {
          router.replace(`/profile/${userId}`);
        }
      }
    }
  }, [router, pathname]);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      setCookie('token', token, { expires: 7 });
      setCookie('userId', user.uid, { expires: 7 });
      router.replace(`/profile/${user.uid}`);
    } catch (error) {
      console.error('Error durante el login:', error);
    }
  };

  if (token) {
    return <p>Redirigiendo...</p>;
  }
  
  return (
    <div
      className="flex min-h-screen flex-1 flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
        <div className="mb-10">
        <LanguageSelector/>
        </div>

      <div className="flex flex-col justify-center items-center bg-[#212121] w-[500px] h-[450px] rounded-[30px] bg-opacity-80">
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
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {t("register")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
