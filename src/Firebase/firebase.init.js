import {
    initializeApp
} from "firebase/app";
import firebaseConfig from "./firebase.config";


const firebaseInitApp = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitApp;