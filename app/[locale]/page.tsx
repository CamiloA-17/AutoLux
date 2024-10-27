'use client';
import { useState } from "react";
import HomeContent from '../[locale]/(principal)/home/page';
import { Vehicle } from "@/types/api_general";
import { Footer, Header } from "@/components";

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [quantity, setQuantity] = useState(0);

  return(
    <div className="Container">
      <Header 
                quantity={0}
                showSearch={false}
            />
      <div>
        <HomeContent /> 
      </div>
      <Footer/>
    </div>
  );
}
