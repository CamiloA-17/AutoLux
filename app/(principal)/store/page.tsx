import { Card } from "@/components"
import { Metadata } from "next"
import lamborghini from "../../assets/images/lamborghini-revuelto.svg";
import jaguar from "../../assets/images/f-type-r-dynamic.svg";


export const metadata: Metadata = {
  title: "Store",
  description: "This is the place to sell the cars"
}

export default function store() {
  return (
    <div>
      <main className="w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 justify-evenly gap-10">
        <Card 
          idCard='1' 
          name="Lamborghini Revuelto"   
          time="2.5" 
          timeText="Aceleración 0-100km/h (segundos)" 
          horsepower="825/9250"
          horsepowerText="Potencia máxima (CV/rpm)"
          topSpeed="350km/h"
          engine="Motor de combustión interna V12 6.5L"
          carImage={lamborghini}
        />
        <Card 
          idCard='2' 
          name="Lamborghini Aventador"   
          time="2.8" 
          timeText="Aceleración 0-100km/h (segundos)" 
          horsepower="700/8250"
          horsepowerText="Potencia máxima (CV/rpm)"
          topSpeed="350km/h"
          engine="Motor de combustión interna V12 6.5L"
          carImage={lamborghini}
        />
        <Card
          idCard='3' 
          name="Jaguar F-Type"   
          time="5.9" 
          timeText="Aceleración 0-100km/h (segundos)" 
          horsepower="300/5500"
          horsepowerText="Potencia máxima (CV/rpm)"
          topSpeed="285km/h"
          engine="Motor de combustión interna V8 5L"
          carImage={jaguar}
        />
      </main>
    </div>
  )
}
