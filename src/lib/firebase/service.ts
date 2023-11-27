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
        return {status: false, statusCode: 400, message: "Email already exists" };
    } else {
        data.role = "admin";
        data.password = await bcrypt.hash(data.password, 10);
        try {
            await addDoc(collection(firestore, "users"), data);
            return {status: true, statusCode: 200, message: "Register Success" }
        } catch (error) {
            return {status: false, statusCode: 400, message: "Register Failed" };
        }        
    }
}

export async function login(data: {email: string}) {
    const q = query(
        collection(firestore, "users"),
        where("email", "==", data.email)
    );

    const snapsot = await getDocs(q);
    const user = snapsot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    if(user) {
        return user[0];
    } else {
        return null
    }
}
git add.
git commit -m "Data baru"
git PushManager