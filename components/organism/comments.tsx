'use client';

import { useState, FormEvent } from 'react';
import { colorBgblack, colorTextWhite, stylesForTitle } from '../tokens';

type Comentario = {
    id: number;
    texto: string;
    likes: number;
    stars: number;
};

export function Comments() {
    const [comentarios, setComentarios] = useState<Comentario[]>([
        { id: 1, texto: 'Este vehículo me parece increíble', likes: 22, stars: 10 },
        { id: 2, texto: 'No me gusta', likes: 12, stars: 4 },
        { id: 3, texto: 'Me encanta!!!', likes: 42, stars: 10 },
    ]);

    const [nuevoComentario, setNuevoComentario] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (nuevoComentario.trim()) {
            setComentarios([
                ...comentarios,
                { id: Date.now(), texto: nuevoComentario, likes: 0, stars: 0 },
            ]);
            setNuevoComentario('');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Comentarios</h2>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="relative w-full">
                    <textarea
                        value={nuevoComentario}
                        onChange={(e) => setNuevoComentario(e.target.value)}
                        className={`w-full p-4 pr-20 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white ${colorBgblack}`}
                        placeholder="Has un comentario..."
                        rows={4}
                    ></textarea>
                    <button
                        type="submit"
                        className={`absolute top-[6.5rem] right-2 px-4 py-2 opacity-80 bg-black text-white rounded-md border`}
                    >
                        Publicar
                    </button>
                </div>
            </form>

            <div>
                {comentarios.map((comentario) => (
                    <div
                        key={comentario.id}
                        className={`flex justify-between items-center p-4 m-2`}
                    >
                        <div className="flex items-start space-x-4">
                            <div className="flex flex-col">
                                <span className="font-semibold">User123</span>
                                <div className={`w-10 h-10 ${colorBgblack} rounded-full`}></div>
                            </div>
                            <div className={`text-sm ${colorBgblack} flex items-center space-x-2 rounded-md p-1 text-white`}>
                                <p className={`m-5`}>{comentario.texto}</p>
                                <span>{comentario.likes}</span>
                                <span role="img" aria-label="corazón">❤️</span>
                                <div className="flex items-center space-x-1">
                                    <span>{comentario.stars}</span>
                                    <span role="img" aria-label="estrella">⭐</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
