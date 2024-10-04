'use client';

import React, { useEffect } from 'react';
import { createUser, getUsers, updateUser, deleteUser } from './libs/api'; // Asegúrate de que la ruta sea correcta

export const CrudComponent: React.FC = () => {
  useEffect(() => {
    const userId = "usuario123"; // ID del usuario

    // Llamar a las funciones CRUD
    const performCrudOperations = async () => {
      // Crear un usuario
      await createUser(userId, { nombre: "Pedro", email: "pedro@example.com" });

      // Leer todos los usuarios
      console.log("Usuarios en la colección:");
      await getUsers();

      // Actualizar el usuario
      await updateUser(userId, { email: "pedro.nuevo@example.com" });

      // Leer nuevamente todos los usuarios
      console.log("Usuarios después de la actualización:");
      await getUsers();

      // Eliminar el usuario
      await deleteUser(userId);

      console.log("Usuarios después de la eliminación:");
      await getUsers();
    };

    performCrudOperations().catch((error) => console.error("Error en la ejecución del CRUD:", error));
  }, []);

  return <div>Operaciones CRUD realizadas en la consola.</div>;
};

