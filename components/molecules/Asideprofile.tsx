'use client';


export function Asideprofile() {
    return (
        <>
            <aside className="w-1/4 bg-gray-100 p-6">
                <h3 className="text-xl font-bold mb-6">Opciones</h3>
                <ul className="space-y-4 text-lg">
                    <li>
                        <a href="/favorites" className="hover:underline">
                            Carros favoritos
                        </a>
                    </li>
                    <li>
                        <a href="/brands" className="hover:underline">
                            Marcas favoritas
                        </a>
                    </li>
                    <li>
                        <a href="/comments" className="hover:underline">
                            Comentarios
                        </a>
                    </li>
                    <li>
                        <a href="/edit-profile" className="hover:underline">
                            Editar perfil
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}
