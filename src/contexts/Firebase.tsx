import { getFirestore } from "firebase/firestore";
import { initializeApp, FirebaseApp } from "firebase/app";

export const COLLECTION_COLLECTIONS = "originals";

export const app: FirebaseApp =
  typeof window !== "undefined"
    ? initializeApp({
        apiKey: "AIzaSyA149SZLk5ja0n4fwJYXIGxutaEfsIoiUE",
        authDomain: "community-nfts.firebaseapp.com",
        projectId: "community-nfts",
        storageBucket: "community-nfts.appspot.com",
        messagingSenderId: "775740160154",
        appId: "1:775740160154:web:fcf6fbf183fcc321818723",
      })
    : ({} as any);

export function useFirebaseApp() {
  return app;
}

export function useFirestore() {
  return getFirestore(useFirebaseApp());
}
