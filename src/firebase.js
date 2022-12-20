import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase, ref } from "firebase/database";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "admin-dashboard-7a805.firebaseapp.com",
//   projectId: "admin-dashboard-7a805",
//   storageBucket: "admin-dashboard-7a805.appspot.com",
//   messagingSenderId: "1039711219926",
//   appId: "1:1039711219926:web:9ac9d08e9b4edee5961977",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAjBiaBBQ3K4oz2OiOaIYII7BHwpmmoOsA",
  authDomain: "travel-2022-686cf.firebaseapp.com",
  databaseURL: "https://travel-2022-686cf-default-rtdb.firebaseio.com",
  projectId: "travel-2022-686cf",
  storageBucket: "travel-2022-686cf.appspot.com",
  messagingSenderId: "361435468846",
  appId: "1:361435468846:web:6065e6a5a884fb641dfbbf",
  measurementId: "G-8K3LENPHC8"
};
  
const app = initializeApp(firebaseConfig);
export const db1 = getFirestore(app);
export const db = getDatabase();
export const auth = getAuth();
export const storage = getStorage(app);

