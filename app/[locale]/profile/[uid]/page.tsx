'use client';
import { useRouter } from 'next/navigation';
import { ProfileBody } from "@/components";
import { Cookies, getCookie } from 'typescript-cookie';
import { useEffect, useState } from "react";
import { getUserData } from "@/utils/api_users";
import { getUidFromToken } from "@/utils/decode_utils";
import { AdminBody } from "@/components/organism/AdminBody";
import { SudoBody } from "@/components/organism/SudoBody";
import { DocumentData } from "firebase/firestore";

export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const [userData, setUserData] = useState<DocumentData | null>(null);

  useEffect(() => {
    const token = getCookie('token');
    setIsLoggedIn(!!token);

    if (token) {
      const userId = getUidFromToken();
      setUid(userId);

      const urlUid = window.location.pathname.split('/').pop();
      if (urlUid !== userId) {
        router.push('/');
      }
      
    } else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    if (uid) {
      getUserData(uid)
        .then((data: any) => {
          setUserData(data.data);
        })
        .catch((e) => {
          alert('Error al consultar la información del API');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false); 
    }
  }, [uid]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {userData && userData.role.nombre === 'admin' && <AdminBody />}
          {userData && userData.role.nombre === 'sudo' && <SudoBody />}
          {userData && userData.role.nombre === 'user' && <ProfileBody />}
          {userData && !['admin', 'sudo', 'user'].includes(userData.role.nombre) && (
            <div>No tienes acceso a esta página.</div>
          )}
          {!userData && (
            <div>Cargando...</div>
          )}
        </main>
      </div>
    </>
  );
}
