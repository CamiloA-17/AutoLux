import { query, where, addDoc, getDocs, collection, updateDoc, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";

const usuariosCollection = collection(db, "users");

export const createUser = async (name: string, id: string, email: string, password: string) => {
    try {
        const user = doc(db, "users", id);
        const docSnapshot = await getDoc(user);

        if (!docSnapshot.exists()) {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const defaultRoleDoc = doc(db, 'roles', '1');

            await setDoc(doc(db, 'users', user.uid), {
                name,
                id,
                email,
                role: defaultRoleDoc
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
    try {
        const user = doc(db, "users", userId);
        const docSnapshot = await getDoc(user);
        const userData = docSnapshot.data();

        if (userData) {
            const roleUser = doc(db, "roles", userData.role.id);
            const roleSnapshot = await getDoc(roleUser);
            const roleData = roleSnapshot.data();
            return {
                data: {
                    ...userData,
                    role: roleData
                }
            }
        }

        else {
            return { data: "User not found" }
        }
    } catch (error) {
        return {data: "Error"}
    }

}

// export async function getUserRole(userId: string) {
//     try {
//         const user = doc(db, "users", userId);
//         const docSnapshot = await getDoc(user);
//         const userData = docSnapshot.data();

//         if (userData) {
//             const roleUser = doc(db, "roles", userData.role.id);
//             const roleSnapshot = await getDoc(roleUser);
//             const roleData = roleSnapshot.data();
//             return {
//                 code: 201, data: {
//                     role: roleData
//                 }
//             }
//         }

//         else {
//             return { code: 404, message: "User not found" }
//         }
//     } catch (error) {
//         return {code: 500, message: "Error"}
//     }
// }

export async function getUserRole(userId: string): Promise<string | null> {
    try {
        const userDoc = doc(db, "users", userId);
        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();

        if (userData && userData.role) {
            const roleDoc = doc(db, "roles", userData.role.id);
            const roleSnapshot = await getDoc(roleDoc);
            const roleData = roleSnapshot.data();

            if (roleData && roleData.name) {
                return roleData.name;
            }
        }

        return null;
    } catch (error) {
        console.error('Error fetching user role:', error);
        return null;
    }
}

export async function userExists(userId: string) {
    const idQuery = query(usuariosCollection, where("id", "==", userId));
    const querySnapshot = await getDocs(idQuery);
    if (!querySnapshot.empty) {
        return true;
    }
    return false;
}

