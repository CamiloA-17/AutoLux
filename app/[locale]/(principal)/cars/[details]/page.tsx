'use client'
import React from 'react'
import { useParams } from "next/navigation"
import { VehicleDetail } from '@/components/organism/vehicleDetail'

export default function DetailProduct() {
    const { details } = useParams()

    console.log(details);
    

    return (
        <div className='text-2xl text-'>
          <VehicleDetail/>
        </div>
    )
}