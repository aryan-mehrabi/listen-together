import {
  writeBatch,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { app } from "../auth/firebase";

const db = getFirestore(app);

export const setData = async (collection, document, documentData) => {
  await setDoc(doc(db, collection, document), documentData);
};

export const setDataId = async data => {
  const newChannelRef = doc(collection(db, "channels"));

  await setDoc(newChannelRef, { ...data, channelId: newChannelRef.id });
};

export const getData = async (collection, document) => {
  const docRef = doc(db, collection, document);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return "Not Found";
  }
};

export const listenDocument = (collection, document, actionCreator) => {
  return onSnapshot(doc(db, collection, document), doc => {
    actionCreator(doc.data());
  });
};

export const createChannel = async (user, channelName, channel) => {
  const batch = writeBatch(db);

  // Set
  const channelRef = doc(collection(db, "channels"));
  batch.set(channelRef, { ...channel, id: channelRef.id });

  // Update
  const newChannels = {
    ...user.channels,
    [channelRef.id]: {
      id: channelRef.id,
      name: channelName,
    },
  };
  const userRef = doc(db, "users", user.userId);
  batch.update(userRef, { channels: newChannels });

  // Commit the batch
  await batch.commit();
};
