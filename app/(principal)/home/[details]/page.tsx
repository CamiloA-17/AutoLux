'use client'

import React from 'react'
import { useParams } from "next/navigation"

export default function DetailProduct() {
  const { details } = useParams()

  return (
    <div className='text-2xl text-'>
      This is my details {details}
    </div>
  )
}