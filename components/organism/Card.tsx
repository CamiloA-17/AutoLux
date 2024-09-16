'use client';

import React from "react"; 

import Link from "next/link";
import Image from "next/image";

import { hooverForCard, spacer, stylesForBlock, stylesForCard, stylesForSubtitle, stylesForText, stylesForTitle } from "../tokens";


type CardProps = {
  idCard: string;
  name: string;
  time: string;
  timeText: string;
  horsepower: string;
  horsepowerText: string;
  topSpeed: string;
  engine: string;
  carImage: string;
}


export function Card({idCard, carImage, name, time, timeText, horsepower, horsepowerText, topSpeed, engine }: CardProps) {
  return (
    <article className={` ${stylesForCard} ${hooverForCard}`}>
        <Link href={`store/${idCard}`}>
            <Image className="rounded-t-md w-full h-32 object-cover" src={carImage} alt="" />
            <div className="p-4 flex flex-col flex-grow">
            <p className={`${stylesForTitle}`}>{name}</p>
            <hr className={`${spacer}`}/>
            <div className={`${stylesForBlock}`}>
              <p className={`${stylesForSubtitle}`}>{time}</p>
              <p className={`${stylesForSubtitle}`}>{horsepower}</p>
            </div>
            <div className={`${stylesForBlock}`}>
              <p className={`${stylesForText}`}>{timeText}</p>
              <p className={`${stylesForText}`}>{horsepowerText}</p>
            </div>
            <hr className={`${spacer}`}/>
            <p className={`${stylesForText} text-xs mb-1`}>{topSpeed}</p>
            <p className={`${stylesForText} text-xs mb-4`}>{engine}</p>
          </div>
        </Link>
        <div className="flex justify-between p-2">
        <button className="w-full p-2 bg-black rounded">
          <p className="text-white text-xs">Add to cart</p>
        </button>
        </div>
    </article>
  )
}




