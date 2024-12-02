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
        <div className="max-w-3xl mx-auto my-10 y-6 space-y-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comentarios</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <textarea
                        value={nuevoComentario}
                        onChange={(e) => setNuevoComentario(e.target.value)}
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
                {comentarios.map((comentario) => (
                    <div
                        key={comentario.id}
                        className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200"
                    >
                        <div className="flex-shrink-0">
                            <div className={`w-10 h-10 ${colorBgblack} rounded-full`} />
                        </div>
                        <div className="ml-4 flex-1">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-gray-800">User123</span>
                                <div className="text-sm text-gray-500">
                                    <span>{comentario.likes} ❤️</span>
                                    <span className="ml-2">{comentario.stars} ⭐</span>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">{comentario.texto}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
