import React from "react"; 

import Link from "next/link";
import Image from "next/image";


import { colorBgRed } from "../tokens";

type CardProps = {
  idCard: string
}

export function Card({idCard}: CardProps) {
  return (
    <article className="flex flex-col h-max rounded-sm border-slate-400 p-4">
        <Link href={`/${idCard}`}>
            <Image className="rounded-md" src="" alt="" width='250' height='200'/>
        </Link>
        <p className="font-bold text-xl text-gray-500">This is the title</p>
        <p className="font-bold text-sm text-gray-500">This is the cost</p>
        <button className="p-2 bg-slate-600 rounded">
            Add to cart
        </button>
    </article>
  )
}
