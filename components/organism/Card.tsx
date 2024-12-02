'use client';

import React from "react"; 
import Link from "next/link";
import Image from "next/image";
import { Vehicle } from '@/types/api';
import { hooverForCard, spacer, stylesForBlock, stylesForCard, stylesForSubtitle, stylesForText, stylesForTitle } from "../tokens";
import { useTranslations } from "next-intl";
import type { StaticImageData } from 'next/image';
import lamborghini from '../../app/assets/images/lamborghini-revuelto.svg';
import jaguar from '../../app/assets/images/f-type-r-dynamic.svg';
import ferrari from '../../app/assets/images/ferrari-812-superfast.jpg';
import Lamborghini_Huracán_Evo from '../../app/assets/images/huracan_evo.jpg';

const imageMap: { [key: string]: StaticImageData } = {
  huracan_evo: Lamborghini_Huracán_Evo,
  jaguar: jaguar,
  ferrari: ferrari,
};

type CardProps = {
  vehicle: Vehicle;
  updateQuantity: () => void;
};

export function Card({ vehicle, updateQuantity }: CardProps) {
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
            <p className={`${stylesForSubtitle}`}>{vehicle.acceleration}</p>
            <p className={`${stylesForSubtitle}`}>{vehicle.hp}</p>
          </div>
          <div className={`${stylesForBlock}`}>
            <p className={`${stylesForText} text-xs mb-4`}>{t("velocity")}</p>
            <p className={`${stylesForText} text-xs mb-4`}>{t("horsepower")}</p>
          </div>
          <hr className={`${spacer}`} />
          <p className={`${stylesForText} text-xs mb-1`}>{t("max_speed")} {vehicle.topSpeed}</p>
          <p className={`${stylesForText} text-xs mb-4`}>{t("engine")} {vehicle.engine}</p>
        </div>
      </Link>
    </article>
  );
}
