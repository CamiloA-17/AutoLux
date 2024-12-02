'use client';

import { useState, FormEvent, useEffect } from 'react';
import { colorBgblack } from '../tokens';
import { Comment } from '@/types/api';
import { getData } from '@/services/api';

export function Comments({ vehicleId }: { vehicleId: string | string[] }) {
    const [comments, setComments] = useState<Comment[] | null>(null);

    const getComments = async () => {
        try {
            const commentsList: Comment[] = await getData<Comment[]>('/comment/');
            const filteredComments = commentsList.filter(comment => comment.vehicle_id.toString() === vehicleId.toString()); 
            setComments(filteredComments);
            console.log('Comments for vehicle:', filteredComments); 
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        if (vehicleId) {
            getComments();
        }
    }, [vehicleId]); 

    const [nuevocomment, setNuevocomment] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (nuevocomment.trim()) {
            setNuevocomment('');
        }
    };

    return (
        <div className="max-w-3xl mx-auto my-10 py-6 space-y-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comentarios</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <textarea
                        value={nuevocomment}
                        onChange={(e) => setNuevocomment(e.target.value)}
                        className={`w-full p-3 pr-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-800 text-sm`}
                        placeholder="Escribe tu comentario..."
                        rows={3}
                    />
                    <button
                        type="submit"
                        className={`absolute top-2 right-2 px-4 py-2 ${colorBgblack} text-white text-sm rounded-md shadow-md hover:bg-indigo-700 focus:outline-none`}
                    >
                        Publicar
                    </button>
                </div>
            </form>

            <div className="space-y-4">
                {comments && comments.length > 0 ? (
                    comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200"
                        >
                            <div className="flex-shrink-0">
                                <div className={`w-10 h-10 ${colorBgblack} rounded-full`} />
                            </div>
                            <div className="ml-4 flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-gray-800">{comment.userId}</span>
                                    <div className="text-sm text-gray-500">
                                        <span>{comment.likes} ❤️</span>
                                        <span className="ml-2">{comment.likes} ⭐</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm">{comment.content}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No hay comentarios disponibles.</p>
                )}
            </div>
        </div>
    );
}
