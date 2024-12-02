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
import Lamborghini_Huracán_Evo from '../../app/assets/images/huracan_evo.jpg';
import urus from '../../app/assets/images/urus.jpg';
import turbo_911_s_image from '../../app/assets/images/911_turbo_s.jpg';
import Porsche_Cayenne_Turbo_GT3_image from '../../app/assets/images/Porsche_Cayenne_Turbo_GT.webp';
import Bugatti_Veyron_Grand_Sport_image from '../../app/assets/images/bugatti_veyron_grand_sport.jpg';
import bugatti_divo from '../../app/assets/images/Bugatti_divo.jpg';
import Tesla_Model_X_Plaid from '../../app/assets/images/tesla_model_x_plaid.jpg';
import Tesla_Roadste from '../../app/assets/images/Tesla_Roadste.jpg';
import Aston_Martin_DBS_Superleggera from '../../app/assets/images/Aston_Martin_DBS_Superleggera.jpg';
import Aston_Martin_DBX707 from '../../app/assets/images/Aston_Martin_DBX707.jpg';

const imageMap: { [key: string]: StaticImageData } = {
  huracan_evo: Lamborghini_Huracán_Evo,
  urus_image: urus,
  turbo_911_s: turbo_911_s_image,
  cayenne_turbo_gt: Porsche_Cayenne_Turbo_GT3_image,
  veyron: Bugatti_Veyron_Grand_Sport_image,
  divo_image: bugatti_divo,
  modelx: Tesla_Model_X_Plaid,
  roadster: Tesla_Roadste,
  dbs_superleggera: Aston_Martin_DBS_Superleggera,
  dbx707: Aston_Martin_DBX707,
  jaguar: jaguar
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
