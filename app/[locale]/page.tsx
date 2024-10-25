'use client'

import { Header } from "@/components";
import { Vehicle } from "@/types/api_general";
import { useState } from "react";


export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [quantity, setQuantity] = useState(0);

    


  return (
    <div>
        <Header 
          quantity={quantity}
          showSearch={true}
        />
        <main className="w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 justify-evenly gap-10">
        </main>
    </div>
  );
}