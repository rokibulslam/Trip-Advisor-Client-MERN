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
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState('')
    console.log(user)
    const gooleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }
    const reload = () => {
        window.location.reload()
    }
    const signUp = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setUserName()
                reload()
                setError('')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));

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
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError('')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false))

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
        name
    }

}

export default useFirebase;