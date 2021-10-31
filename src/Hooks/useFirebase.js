import firebaseInitApp from "../Firebase/firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    useEffect,
    useState
} from "react";


firebaseInitApp();
const auth = getAuth();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    console.log(user)
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('')
    const gooleSignIn = () => {
        
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
            
    }
    const reload = () => {
        window.location.reload()
    }
    const signUp = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
            

    }
    const setUserName = () => {
        setIsLoading(true)
        updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(() => {})
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
            

    }
    useEffect(() => {
        const unsbscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsbscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        gooleSignIn,
        signUp,
        signIn,
        logOut,
        isLoading,
        setName,
        setError,
        name,
        setIsLoading,
        setUser, setUserName, reload
    }

}

export default useFirebase;