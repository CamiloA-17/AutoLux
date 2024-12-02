"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { User, Response } from "@/types/api";
import { getDataById, putData } from "@/services/api";
import { LateralList } from "../molecules/LateralList";
import { EditProfileModal } from "../molecules/EditProfileModal";

import profileLogoPage from "../../app/assets/images/profileLogoPage.png";
import { useTranslations } from "next-intl";

export function ProfileBody() {
  const [userData, setUserData] = useState<User | null>(null);
  const { uid } = useParams();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const t = useTranslations("Profile");


  const getUserById = async (id: string) => {
    try {
      const user = await getDataById<User>("/user", id);
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

  const filters = [
    { id: 1, name: t("comments"), path: "/comments" },
    { id: 2, name: t("editProfile"), path: "/edit-profile" },
  ];

  const handleFilterClick = (id: number) => {
    const selectedFilter = filters.find((filter) => filter.id === id);
    if (selectedFilter?.path === "/edit-profile") {
      setIsEditing(true);
    } else if (selectedFilter) {
      router.push(selectedFilter.path);
    }
  };

  const handleSave = async (updatedUser: Partial<User>) => {
    try {
      await putData<User, Response>("/user/", {
        id: userData?.id || "",
        name: updatedUser.name || "",
        last_name: updatedUser.last_name || "",
        email: updatedUser.email || "",
        age: userData?.age || 0,
        password: userData?.password || "",
        role_id: userData?.role_id || 0,
      });
      router.refresh();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-10">
      <main className="flex flex-wrap flex-1">
        <aside className="w-full md:w-1/4 bg-gray-100 p-4 md:p-6 mb-6 md:mb-0">
          <LateralList filters={filters} onFilterClick={handleFilterClick} title={t("options")} />
        </aside>

        <section className="w-full md:flex-1 p-4 md:p-10">
          <div className="flex flex-wrap items-start">
            <div className="w-full md:w-auto">
              <h2 className="text-3xl md:text-5xl font-bold">{t("greet")}!</h2>
              <h3 className="text-2xl md:text-4xl font-semibold m-2 underline">
                {userData?.name || "Usuario"} {userData?.last_name}
              </h3>
            </div>

            <div className="w-full md:w-auto ml-auto mt-4 md:mt-0 flex justify-center">
              <a className="w-32 md:w-72" href="/profile">
                <Image src={profileLogoPage} alt="Logo" className="rounded-full" />
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold mb-6">{t("info")}</h3>
            <ul className="space-y-4 text-base md:text-lg">
              <li>
                <strong>{t("user")}:</strong> {userData?.name || "Cargando..."} {userData?.last_name}
              </li>
              <li>
                <strong>{t("email")}:</strong> {userData?.email || "No disponible"}
              </li>
              <li>
                <strong>{t("id")}:</strong> {userData?.id || "No disponible"}
              </li>
            </ul>
          </div>
        </section>
      </main>
      {isEditing && (
        <EditProfileModal user={userData} onClose={() => setIsEditing(false)} onSave={handleSave} />
      )}
    </div>
  );
}
