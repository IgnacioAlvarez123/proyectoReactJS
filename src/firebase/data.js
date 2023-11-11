
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use



const firebaseConfig = {
    apiKey: "AIzaSyB19vludBstlMzWJ8PMritz31OW9vkpW7w",
    authDomain: "spaceat-c44cb.firebaseapp.com",
    projectId: "spaceat-c44cb",
    storageBucket: "spaceat-c44cb.appspot.com",
    messagingSenderId: "664882872744",
    appId: "1:664882872744:web:196246ae928c97d77e9d9d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);