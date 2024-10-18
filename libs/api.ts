import { db } from '../firebaseConfig';
import { query, where, addDoc, getDocs, collection, updateDoc, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

const usuariosCollection = collection(db, "usuarios");

export const createUser = async (name: string, id: string, email: string, password: string) => {
    try {
        if (!await userExists(id)) {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                name,
                id,
                email,
                role: 'user'
            });

            return { success: true, message: 'Usuario registrado exitosamente' };
        }
        return { success: false, message: 'El usuario ya existe' };

    } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
            return { success: false, message: 'El correo ya está en uso' };
        }
        return { success: false, message: error.message };
    }
};

export async function getUsers() {
    const all_users = await getDocs(usuariosCollection);
    all_users.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}

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


export async function deleteUser(userId: string) {
    const user = doc(db, "usuarios", userId);
    await deleteDoc(user);
    console.log(`Usuario con ID ${user} eliminado.`);
}

export async function loginUser(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        console.log('Token de inicio de sesión:', token);
    } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
    }
}

export async function getUserData(userId: string) {
    const user = doc(db, "usuarios", userId);
    const docSnapshot = await getDoc(user);

    if (docSnapshot.exists()) {
        console.log(`Usuario con ID ${userId}:`, docSnapshot.data());
    } else {
        console.error(`No se encontró el documento con ID: ${userId}`);
    }
}

export async function userExists(userId: string) {
    const idQuery = query(usuariosCollection, where("id", "==", userId));
    const querySnapshot = await getDocs(idQuery);
    if (!querySnapshot.empty){
        return true;
    }
    return false;
}

