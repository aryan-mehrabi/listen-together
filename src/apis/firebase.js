import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../auth/firebase";

const db = getFirestore(app);

export const setData = async (collection, document, documentData) => {
  await setDoc(doc(db, collection, document), documentData);
};

export const getData = async (collection, document) => {
  const docRef = doc(db, collection, document);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
