import { app } from "auth/firebase";
const {
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
  orderBy,
  getDocs
} = await import("firebase/firestore");

const db = getFirestore(app);

export const getQueryDocs = getDocs;

export const setData = async (data, ...path) => {
  await setDoc(doc(db, ...path), data);
};

export const setDataId = async (data, ...path) => {
  const docRef = doc(collection(db, ...path));
  await setDoc(docRef, {
    ...data,
    id: docRef.id,
    createdAt: serverTimestamp(),
  });
};

export const getData = async (...path) => {
  const docRef = doc(db, ...path);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return "Not Found";
  }
};

export const updateData = async (update, ...path) => {
  const docRef = doc(db, ...path);
  await updateDoc(docRef, update);
};

export const listenDocument = (actionCreator, errorCallback, ...path) => {
  return onSnapshot(
    doc(db, ...path),
    doc => {
      if (doc.metadata.fromCache) {
        errorCallback(new Error("No internet connection. Make sure you have an active internet connection."));
      } else {
        actionCreator(doc.data());
      }
    },
    errorCallback
  );
};

export const listenQuery = (actionCreator, q) => {
  return onSnapshot(q, doc => {
    actionCreator(doc);
  });
};

export const queryCollection = (col, ...queries) => {
  const q = query(collection(db, col), where(...queries));
  return q;
};

export const queryByOrder = (order, ...col) => {
  const q = query(collection(db, ...col), orderBy(order));
  return q;
};

export const createChannel = async (userId, channel) => {
  const batch = writeBatch(db);

  const channelRef = doc(collection(db, "channels"));
  batch.set(channelRef, { ...channel, id: channelRef.id });

  const newChannel = {
    id: channelRef.id,
    name: channel.name,
  };
  const userRef = doc(db, "users", userId);
  batch.update(userRef, { [`channels.${channelRef.id}`]: newChannel });

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
