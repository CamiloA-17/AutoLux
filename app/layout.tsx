'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Spinner } from '@/components/atoms/Spinner';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? <Spinner /> : children}
      </body>
    </html>
  );
}
