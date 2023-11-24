import { getFirestore, getDocs, collection, getDoc, doc } from "firebase/firestore";
import app from "./init"

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