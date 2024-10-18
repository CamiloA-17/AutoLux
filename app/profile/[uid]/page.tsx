'use client'
import { ProfileBody } from "@/components";
import { Cookies, setCookie } from 'typescript-cookie'; 
import { useEffect, useState } from "react";

export default function Profile() {
  const [loading, setLoading] = useState(true);

  const logout = () => {
    Cookies.remove('token');
    window.location.reload();
  };

  useEffect(() => {
    setLoading(false); 
  }, []);

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

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <ProfileBody />
        </main>
      </div>
    </>
  );
}
