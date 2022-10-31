import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBKp2iUfAaB8ydkr9HuGFs53DRHd6V0uzU",
    authDomain: "tres-bastiones.firebaseapp.com",
    projectId: "tres-bastiones",
    storageBucket: "tres-bastiones.appspot.com",
    messagingSenderId: "348948622157",
    appId: "1:348948622157:web:0a874d299ea794feb0e504"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)