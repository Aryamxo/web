
import { initializeApp } from "firebase/app";


import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBLHo8cqowpIpXl-h509NTL_2A7qLPID0o",
  authDomain: "website-a4387.firebaseapp.com",
  projectId: "website-a4387",
  storageBucket: "website-a4387.firebasestorage.app",
  messagingSenderId: "177339107744",
  appId: "1:177339107744:web:a30064cf6162c2f2bfbcc5",
  measurementId: "G-BR1B7V3XLW"
};


 export const app = initializeApp(firebaseConfig);






const firebaseApp = initializeApp(firebaseConfig); // هذا هو التعريف الذي كان مفقوداً
const db = getFirestore(firebaseApp); // استخدام firebaseApp هنا بعد تعريفه
export { db, collection, addDoc };
export default firebaseApp;