'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { colorBgblack } from '../tokens';
import { Comment } from '@/types/api';
import { getData, postData } from '@/services/api';
import { getUidFromToken } from "@/utils/decode_utils";

export function Comments({ vehicleId }: { vehicleId: string | string[] }) {
    const router = useRouter();
    const [comments, setComments] = useState<Comment[] | null>(null);
    const [nuevocomment, setNuevocomment] = useState<string>('');
    const user_id = getUidFromToken();

    const getComments = async () => {
        try {
            const commentsList: Comment[] = await getData<Comment[]>('/comment/');
            const filteredComments = commentsList.filter(comment => comment.vehicle_id.toString() === vehicleId.toString());
            setComments(filteredComments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        if (vehicleId) {
            getComments();
        }
    }, [vehicleId]);

    const createComment = async () => {
        try {
            if (!user_id || !vehicleId || !nuevocomment) {
                throw new Error("Missing required fields to create a comment");
            }

            const vehicleIdNumber = Array.isArray(vehicleId) ? parseInt(vehicleId[0], 10) : parseInt(vehicleId, 10);

            if (isNaN(vehicleIdNumber)) {
                throw new Error("Invalid vehicle ID");
            }

            const newComment: Comment = {
                date: new Date().toISOString(),
                user_id,
                content: nuevocomment,
                vehicle_id: vehicleIdNumber,
                likes: 0,
                dislikes: 0,
            };

            await postData<Comment, Comment>('/comment/', newComment);
            setComments((prev) => (prev ? [...prev, newComment] : [newComment])); // Actualizar comentarios
            setNuevocomment('');
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!user_id) {
            router.push('/login');
            return;
        }

        createComment();
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
                    comments.map((comment, index) => (
                        <div
                            key={index}
                            className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200"
                        >
                            <div className="flex-shrink-0">
                                <div className={`w-10 h-10 ${colorBgblack} rounded-full`} />
                            </div>
                            <div className="ml-4 flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-gray-800">{comment.user_id}</span>
                                    <div className="text-sm text-gray-500">
                                        <span>{comment.likes} ❤️</span>
                                        <span className="ml-2">{comment.dislikes} ⭐</span>
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
