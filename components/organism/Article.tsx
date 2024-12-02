'use client'
import React, { useState, useEffect } from 'react'
import { VehicleDetail } from './vehicleDetail'
import { Comments } from './comments'
import { getData } from '@/services/api'
import { Article } from '@/types/api'

export function ArticleContent({ id }: { id: string | string[] }) {

    const [matchedArticle, setMatchedArticle] = useState<Article | null>(null);

    useEffect(() => {
        const getArticleByCarId = async () => {
            try {
                const articles: Article[] = await getData<Article[]>('/article/');

                console.log('Articles:', articles);

                const foundArticle = articles.find(article => article.vehicle_id.toString() === id.toString());

                setMatchedArticle(foundArticle || null);

            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        if (id) {
            getArticleByCarId();
        }
    }, [id]); 

    return (
        <div className="">
            <div>
                <VehicleDetail />
            </div>

            {matchedArticle ? (
                <div className="p-4 rounded-lg max-w-xl mx-auto mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800">{matchedArticle.title}</h2>
                    <p className="mt-3 text-gray-700 text-sm">{matchedArticle.content}</p>
                    <p className="mt-3 text-gray-700 text-sm text-right">{matchedArticle.date}</p>

                </div>
            ) : (
                <p className="text-gray-500 text-center">No article found.</p>
            )}

            <div>
                <Comments />
            </div>
        </div>
    );
}
