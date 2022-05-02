import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import auth from "../firebase/firebase.init"

const useSocialLogIn = () => {
    const [signInWithMicrosoft, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const handleGoogleSignIn = () => {
        signInWithMicrosoft()
    }
    if(googleError){
        toast.error(googleError.code,{
            id: 'error'
        })
    }
    return {
        handleGoogleSignIn,
        googleAuth: {
            googleUser,
            googleLoading
        }
    }
}
export default useSocialLogIn