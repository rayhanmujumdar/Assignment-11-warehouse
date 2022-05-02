import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.init";

const useLogin = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    // signing email address handler
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!user) {
      signInWithEmailAndPassword(email, password);
    }
  };
  useEffect(() => {
    if (user) {
      toast.success("Successfully Login", {
        id: "success",
      });
    }
  },[user])
  useEffect(() => {
    if (error) {
      switch(error.code){
        case "auth/wrong-password":
          toast.error('Worng password',{
            id: 'error'
          })
          break
        case "auth/too-many-requests":
          toast.error('too many requests',{
            id: 'error'
          })
          break
        case "auth/user-not-found":
          toast.error('user not found',{
            id: 'error'
          })
          break
          default:
          toast.error('something was wrong',{
            id: 'error'
          })
      }
      console.log(error.code);
    }
  },[error])
  return {
    handleSignIn,
    signInUser: [user,loading,error]
  };
};

export default useLogin;
