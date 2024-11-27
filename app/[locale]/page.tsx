'use client';
import { useState } from "react";
import HomeContent from '../[locale]/(principal)/home/page';
import { Footer, Header } from "@/components";

export default function Home() {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <div>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}
