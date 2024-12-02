    'use client'
    import React from 'react'
    import { useParams } from "next/navigation"
    import { ArticleContent } from '@/components/organism/Article'

    export default function DetailProduct() {
        const { details } = useParams()

        console.log(details);

        return (
            <div className='text-2xl'>

                <ArticleContent id={details} />
            </div>
        )
    }
