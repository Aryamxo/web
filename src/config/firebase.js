
import { initializeApp } from "firebase/app";


import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2ogGBJOEsCGHTgbZN1trKSakoQImEvoA",
  authDomain: "website-b7a55.firebaseapp.com",
  projectId: "website-b7a55",
  storageBucket: "website-b7a55.firebasestorage.app",
  messagingSenderId: "20658954977",
  appId: "1:20658954977:web:c7fb7daf1f3f39edbb4da0",
  measurementId: "G-LS0W6CFXGZ"
};

 export const app = initializeApp(firebaseConfig);






const firebaseApp = initializeApp(firebaseConfig); 
const db = getFirestore(firebaseApp); 
export { db, collection, addDoc };
export default firebaseApp;