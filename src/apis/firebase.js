import {
  writeBatch,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getFirestore,
  collection,
  query,
  where,
  deleteField,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "../auth/firebase";

const db = getFirestore(app);

export const setData = async (documentData, ...path) => {
  await setDoc(doc(db, ...path), documentData);
};

export const setDataId = async (data, ...path) => {
  const docRef = doc(collection(db, ...path));
  await setDoc(docRef, { ...data, id: docRef.id, createdAt: serverTimestamp() });
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

export const updateData = async (update, ...path) => {
  const docRef = doc(db, ...path)
  await updateDoc(docRef, update)
}

export const listenDocument = (collection, document, actionCreator) => {
  return onSnapshot(doc(db, collection, document), doc => {
    actionCreator(doc.data());
  });
};

export const listenCollection = (actionCreator, ...path) => {
  return onSnapshot(collection(db, ...path), doc => {
    const messages = {};
    doc.forEach(doc => {
      messages[doc.data().id] = { ...doc.data() };
    });
    actionCreator(messages);
  });
};

export const queryListener = (actionCreator, q) => {
  return onSnapshot(q, doc => {
    const users = {};
    doc.forEach(doc => {
      users[doc.data().userId] = { ...doc.data() };
    });
    actionCreator(users);
  });
};

export const queryCollection = (col, ...queries) => {
  const q = query(collection(db, col), where(...queries));
  return q;
};

export const createChannel = async (userId, channel) => {
  const batch = writeBatch(db);

  // Set
  const channelRef = doc(collection(db, "channels"));
  batch.set(channelRef, { ...channel, id: channelRef.id });

  // Update
  const newChannel = {
    id: channelRef.id,
    name: channel.name,
  };
  const userRef = doc(db, "users", userId);
  batch.update(userRef, { [`channels.${channelRef.id}`]: newChannel });

  // Commit the batch
  await batch.commit();
};

export const addMemberToChannel = async (userId, channel) => {
  const batch = writeBatch(db);

  const newChannel = {
    id: channel.id,
    name: channel.name,
  };
  const userRef = doc(db, "users", userId);
  batch.update(userRef, { [`channels.${channel.id}`]: newChannel });

  const channelRef = doc(db, "channels", channel.id);
  batch.update(channelRef, { [`roles.${userId}`]: "member" });

  await batch.commit();
};

export const removeMemberFromChannel = async (userId, channelId) => {
  const batch = writeBatch(db);

  const userRef = doc(db, "users", userId);
  batch.update(userRef, { [`channels.${channelId}`]: deleteField() });

  const channelRef = doc(db, "channels", channelId);
  batch.update(channelRef, { [`roles.${userId}`]: deleteField() });

  await batch.commit();
};
