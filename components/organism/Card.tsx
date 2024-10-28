'use client';

import React from "react"; 
import Link from "next/link";
import Image from "next/image";
import { useShoppingCarStore } from "@/store/shoppingCar";
import { Vehicle } from "@/types/api_general";
import { DaoVehicle } from "@/types/shoppingCar";
import { hooverForCard, spacer, stylesForBlock, stylesForCard, stylesForSubtitle, stylesForText, stylesForTitle } from "../tokens";
import { useTranslations } from "next-intl";
import type { StaticImageData } from 'next/image';
import lamborghini from '../../app/assets/images/lamborghini-revuelto.svg';
import jaguar from '../../app/assets/images/f-type-r-dynamic.svg';
import ferrari from '../../app/assets/images/ferrari-812-superfast.jpg';

const imageMap: { [key: string]: StaticImageData } = {
  lamborghini: lamborghini,
  jaguar: jaguar,
  ferrari: ferrari,
};

type CardProps = {
  vehicle: Vehicle;
  updateQuantity: () => void;
};

export function Card({ vehicle, updateQuantity }: CardProps) {
  const addVehicle = useShoppingCarStore((state) => state.addItem);

  const onAddToCart = (vehicle: Vehicle) => {
    addVehicle(vehicle);
  };

  const t = useTranslations("Card");

  const vehicleImage = imageMap[vehicle.image] || jaguar;

  return (
    <article className={`${stylesForCard} ${hooverForCard}`}>
      <Link href={`store/${vehicle.id}`}>
        <Image className="rounded-t-md w-full h-32 object-cover" src={vehicleImage} alt={vehicle.name} />
        <div className="p-4 flex flex-col flex-grow">
          <p className={`${stylesForTitle}`}>{vehicle.name}</p>
          <hr className={`${spacer}`} />
          <div className={`${stylesForBlock}`}>
            <p className={`${stylesForSubtitle}`}>{vehicle.zero_to_hundred_time}</p>
            <p className={`${stylesForSubtitle}`}>{vehicle.horsepower}</p>
          </div>
          <div className={`${stylesForBlock}`}>
            <p className={`${stylesForText} text-xs mb-4`}>{t("velocity")}</p>
            <p className={`${stylesForText} text-xs mb-4`}>{t("horsepower")}</p>
          </div>
          <hr className={`${spacer}`} />
          <p className={`${stylesForText} text-xs mb-1`}>{t("max_speed")} {vehicle.max_speed}</p>
          <p className={`${stylesForText} text-xs mb-4`}>{t("engine")} {vehicle.engine}</p>
        </div>
      </Link>
      <div className="flex justify-between p-2">
        <button onClick={() => onAddToCart(vehicle)} className="w-full p-2 bg-black rounded">
          <p className="text-white text-xs">{t("add_to_car")}</p>
        </button>
      </div>
    </article>
  );
}
