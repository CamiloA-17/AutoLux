'use client';

import React from "react"; 

import Link from "next/link";
import Image from "next/image";

import { useShoppingCarStore } from "@/store/shoppingCar";

import { Vehicle } from "@/types/api_general";
import { DaoVehicle } from "@/types/shoppingCar";

import { hooverForCard, spacer, stylesForBlock, stylesForCard, stylesForSubtitle, stylesForText, stylesForTitle } from "../tokens";


type CardProps = {
  vehicle : Vehicle,
  updateQuantity: () => void
}


export function Card({vehicle, updateQuantity}: CardProps) {

  const addVehicle = useShoppingCarStore((state) => state.addItem);

  const onAddToCart = (vehicle: DaoVehicle) => {
    addVehicle(vehicle);
  }

  return (
    <article className={` ${stylesForCard} ${hooverForCard}`}>
        <Link href={`store/${vehicle.id}`}>
            <Image className="rounded-t-md w-full h-32 object-cover" src={vehicle.image} alt="" />
            <div className="p-4 flex flex-col flex-grow">
            <p className={`${stylesForTitle}`}>{vehicle.name}</p>
            <hr className={`${spacer}`}/>
            <div className={`${stylesForBlock}`}>
              <p className={`${stylesForSubtitle}`}>{vehicle.zeroToHundredTime}</p>
              <p className={`${stylesForSubtitle}`}>{vehicle.horsepower}</p>
            </div>
            {/* <div className={`${stylesForBlock}`}>
              <p className={`${stylesForText}`}>{timeText}</p>
              <p className={`${stylesForText}`}>{horsepowerText}</p>
            </div> */}
            <hr className={`${spacer}`}/>
            <p className={`${stylesForText} text-xs mb-1`}>{vehicle.maxSpeed}</p>
            <p className={`${stylesForText} text-xs mb-4`}>{vehicle.engine}</p>
          </div>
        </Link>
        <div className="flex justify-between p-2">
        <button onClick={() => onAddToCart(vehicle)} className="w-full p-2 bg-black rounded">
          <p className="text-white text-xs">Add to cart</p>
        </button>
        </div>
    </article>
  )
}




