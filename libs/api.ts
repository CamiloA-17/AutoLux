import { db } from '../firebaseConfig'; 
import { query, where, addDoc, getDocs, collection, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore"; 
import bcrypt from 'bcryptjs';
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


//login

export const loginUser = async (email: string, password: string) => {
  const q = query(collection(db, 'users'), where('email', '==', email));
  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log('No se encontró un usuario con ese correo electrónico');
      return;
    }
    const userDoc = querySnapshot.docs[0];
    const hashedPassword = userDoc.data().password;
    // Comparar la contraseña ingresada con la hasheada
    const match = await bcrypt.compare(password, hashedPassword);
    if (match) {
      console.log('Inicio de sesión exitoso');
      return userDoc.data();
    } else {
      console.log('Contraseña incorrecta');
      return false;
    }
  } catch (error) {
    console.error('Error al iniciar sesión: ', error);
    return false;
  }
};