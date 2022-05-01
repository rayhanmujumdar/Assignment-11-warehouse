import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [createUserWithEmailAndPassword, signUpUser, loading, signUpError] =  useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
//   handle submit
  const handleRegSubmit = (e) => {
    let user = {};
    let error = {};
    e.preventDefault();
    const name = e.target.yourName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length >= 6) {
      user = { ...user, password };
      error = { ...error, password: "" };
    } else {
      user = { ...user, password: "" };
      error = { ...error, password: "password must be 6 character" };
    }
    if (password === confirmPassword && password.length >= 6) {
      user = { ...user, password };
      error = { confirmPassword: "", ...error };
    } else {
      error = { confirmPassword: "❌ password MissMatch", ...error };
      user = { ...user, password: "" };
    }
    if (name.length < 20) {
      user = { ...user, name };
      error = { ...error, name: "" };
    } else {
      user = { ...user, name: "" };
      error = { ...error, name: "❌ Name is to longer" };
    }
    if (email.includes("@")) {
      user = { ...user, email };
      error = { ...error, email: "" };
    } else {
      user = { ...user, email: "" };
      error = { ...error, email: "❌ Invalid email" };
    }
    // create a register from
    if (user?.email && user?.password && !signUpUser && user?.name) {
       createUserWithEmailAndPassword(user?.email, user?.password)
       .then(() => {
           updateProfile({ displayName: user?.name });
           e.target.reset();
       })
    } else if (signUpUser) {
      toast.error("user already exist", {
        id: "error",
      });
    }
    setError(error);
  };
  return {
    handleRegSubmit,
    error,
    user:{
        signUpUser,
        loading,
        signUpError
    }
  };
};
export default useSignup;
