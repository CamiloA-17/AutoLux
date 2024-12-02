"use client";

import Image from "next/image";
import profileLogoPage from "../../app/assets/images/profileLogoPage.png";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { User } from "@/types/api_general";
import { getDataById } from "@/services/api";
import { Asideprofile } from "../molecules/Asideprofile";

export function ProfileBody() {
  const [userData, setUserData] = useState<User | null>(null);
  const { uid } = useParams();

  const getUserById = async (id: string) => {
    try {
      const user = await getDataById<User>("/user", id)
      setUserData(user);
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
    }
  };

  useEffect(() => {
    if (uid) {
      const id = Array.isArray(uid) ? uid[0] : uid;
      getUserById(id);
    }
  }, [uid]);

  return (
    <div className="flex flex-col min-h-screen m-10">
      <main className="flex flex-1">
        <Asideprofile />
        <section className="flex-1 p-10">
          <div className="flex items-start">
            <div>
              <h2 className="text-[50px] font-bold">¡Hola!</h2>
              <h3 className="text-[40px] font-semibold m-2 underline">
                {userData?.name || "Usuario"} {userData?.last_name}
              </h3>
            </div>

            <div className="ml-auto mr-auto">
              <a className="flex justify-center w-[300px]" href="/profile">
                <Image
                  src={profileLogoPage}
                  alt="Logo"
                  className="rounded-full"
                />
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6">Mi información</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <strong>Nombre usuario:</strong> {userData?.name || "Cargando..."} {userData?.last_name}
              </li>
              <li>
                <strong>Correo electrónico:</strong>{" "}
                {userData?.email || "No disponible"}
              </li>
              <li>
                <strong>Identificación:</strong>{" "}
                {userData?.id || "No disponible"}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
