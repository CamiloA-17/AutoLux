'use client';
import { useRouter } from 'next/navigation';
import { ProfileBody } from "@/components";
import { Cookies, getCookie } from 'typescript-cookie';
import { useEffect, useState } from "react";
import { getUidFromToken } from "@/utils/decode_utils";
import { AdminBody } from "@/components/organism/AdminBody";
import { SudoBody } from "@/components/organism/SudoBody";
import { Role, User } from '@/types/api';
import { getData } from '@/services/api';

export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState<string>();
  const [userData, setUserData] = useState<User>();
  const [roleData, setRoleData] = useState<Role>();

  useEffect(() => {
    const token = getCookie('token');
    setIsLoggedIn(!!token);

    if (token) {
      const userId = getUidFromToken();
      
      if (userId) {
        setUid(userId);
      } else {
        console.error('No se pudo obtener el id del usuario');
        
      }

      const urlUid = window.location.pathname.split('/').pop();
      if (urlUid !== userId) {
        router.push('/');
      }

    } else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const getUserById = async () => {
      try {
        const user = await getData<User>(`/user/${uid}`);
        console.log('User:', user);
        
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (uid) {
      getUserById();
    }
  }, [uid]);

  useEffect(() => {
    const getRoleById = async () => {
      try {
        if (userData) {
          const role = await getData<Role>(`/role/${userData.role_id}`);
          console.log('Role:', role);
          setRoleData(role);
        }
      } catch (error) {
        console.error('Error fetching role:', error);
      }
    };

    if (userData) {
      getRoleById();
    }
  }, [userData]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {userData && roleData?.name === 'Admin' && <AdminBody />}
          {userData && roleData?.name === 'User' && <ProfileBody />}
          {userData && roleData?.name && !['Admin', 'User'].includes(roleData.name) && (
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
