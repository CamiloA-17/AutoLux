'use client';
import { ProfileBody } from "@/components";
import { Cookies, getCookie } from 'typescript-cookie';
import { useEffect, useState } from "react";
import { getUserData } from "@/libs/api_users";
import { getUidFromToken } from "@/libs/decode_utils";
import { AdminBody } from "@/components/organism/AdminBody";
import { SudoBody } from "@/components/organism/SudoBody";
import { DocumentData } from "firebase/firestore";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const [userData, setUserData] = useState<DocumentData | null>(null);

  const logout = () => {
    Cookies.remove('token');
    window.location.reload();
  };

  useEffect(() => {
    const token = getCookie('token');
    setIsLoggedIn(!!token);

    if (token) {
      const userId = getUidFromToken();
      setUid(userId);
    } else {
      setLoading(false); // Si no hay token, finaliza la carga
    }
  }, []);

  useEffect(() => {
    if (uid) {
      getUserData(uid)
        .then((data) => {
          
            setUserData(data.data);
        })
        .catch((e) => {
          alert('Error al consultar la información del API');
        })
        .finally(() => setLoading(false)); // Finaliza la carga independientemente del resultado
    } else {
      setLoading(false); // Si no hay uid, finaliza la carga
    }
  }, [uid]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">
          <style jsx>{`
            .loader {
              border: 8px solid #f3f3f3; /* Color de fondo */
              border-top: 8px solid #3498db; /* Color del spinner */
              border-radius: 50%;
              width: 60px;
              height: 60px;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Aquí mantengo tu estructura de return
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {userData && userData.role.nombre === 'admin' && <AdminBody />}
          {userData && userData.role.nombre === 'sudo' && <SudoBody />}
          {userData && userData.role.nombre === 'user' && <ProfileBody />}
          {/* Si no hay un rol coincidente, puedes agregar un mensaje o redirigir */}
          {userData && !['admin', 'sudo', 'user'].includes(userData.role.nombre) && (
            <div>No tienes acceso a esta página.</div>
          )}
          {!userData && (
            <div>No estás logueado.</div>
          )}
        </main>
      </div>
    </>
  );
}
