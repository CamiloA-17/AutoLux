import { db } from '../firebaseConfig'; 
import { addDoc, getDocs, collection, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore"; 

const usuariosCollection = collection(db, "usuarios"); 

// Crear un nuevo usuario
export async function createUser(userId: string, userData: { nombre: string; email: string }) {
  try {
    await addDoc(usuariosCollection, { ...userData, id: userId }); 
    console.log(`Usuario creado con ID: ${userId}`);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
  }
}

// Leer todos los usuarios
export async function getUsers() {
  const all_users = await getDocs(usuariosCollection);
  all_users.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`); 
  });
}

// Actualizar un usuario
export async function updateUser(userId: string, updatedData: { email?: string }) {
    const user = doc(db, "usuarios", userId);
    console.log("Intentando actualizar el usuario con ID:", userId);
  
    const docSnapshot = await getDoc(user);
    
    if (docSnapshot.exists()) {
      await updateDoc(user, updatedData);
      console.log(`Usuario con ID ${userId} actualizado.`);
    } else {
      console.error(`No se encontró el documento con ID: ${userId}`);
    }
  }
  

// Eliminar un usuario
export async function deleteUser(userId: string) {
  const user = doc(db, "usuarios", userId); 
  await deleteDoc(user); 
  console.log(`Usuario con ID ${user} eliminado.`);
}
