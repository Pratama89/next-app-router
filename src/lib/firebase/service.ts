import { getFirestore, getDocs, collection, getDoc, doc, query, where, addDoc } from "firebase/firestore";
import app from "./init"
import bcrypt from "bcrypt"

const firestore = getFirestore(app)

export async function retriveData(collectionName: string) {
    const snapsot = await getDocs(collection(firestore, collectionName));
    const data = snapsot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function retriveDataById(collectionName: string, id: string) {
    const snapsot = await getDoc(doc(firestore, collectionName, id))
    const data = snapsot.data()
    return data
}

export async function register(
    data: {
        fullname: string;
        email: string;
        password: string;
        role?: string;
    },
   
) {
    const q = query(
        collection(firestore, "users"), 
        where("email", "==", data.email)
    );
    const snapsot = await getDocs(q);
    const users = snapsot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    if (users.length > 0) {
        return {status: false, message: "Email already exists" };
    } else {
        data.role = "admin";
        data.password = await bcrypt.hash(data.password, 10);
        try {
            await addDoc(collection(firestore, "users"), data);
        } catch (error) {
            return {status: false, message: error.message };
        }

        await addDoc(collection(firestore, "users"), data). then (() => {
            callback({status: true, message: "Register Success" });
        }).catch((error) => {
            callback({status: false, message: error.message });
        });
    }
}