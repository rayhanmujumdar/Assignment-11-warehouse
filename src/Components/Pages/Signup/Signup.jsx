import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import useSignup from "../../../hooks/useSignup";
import "./Signup.css";

const Signup = () => {
  const [check, setCheck] = useState(false);
  const checkRef = useRef(false);
  const navigate = useNavigate();
  const [authUser, authLoading] = useAuthState(auth);
  const { handleRegSubmit, error, user } = useSignup();
  const {signUpUser, loading, signUpError } = user;
  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser]);
  useEffect(() => {
    if(signUpUser){
        toast.success("email verify code sent", {
            id: "success",
          });
    }
  },[signUpUser])
  console.log(signUpUser)
  if (signUpError) {
    console.log(signUpError);
  }
  if (loading || authLoading) {
    return <div>loading....</div>;
  }
  console.log(signUpUser)
  return (
    <div>
      <div className="register_from py-10 block p-6 rounded-lg shadow-lg mx-auto my-10 md:max-w-lg max-w-md">
        <h1 className="text-3xl text-white mb-5">Please register from</h1>
        <form onSubmit={handleRegSubmit}>
          <div className="grid">
            <div className="form-group mb-6">
              <input
                name="yourName"
                type="text"
                className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
              />
              <p className="text-left text-red-500 my-1">{error?.name}</p>
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              name="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput125"
              placeholder="Email address"
            />
            <p className="text-left text-red-500 my-1">{error?.email}</p>
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              name="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="Password"
            />
            <p className="text-left text-red-500 my-1">{error?.password}</p>
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              name="confirmPassword"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="confirm password"
            />
            <p className="text-left text-red-500 my-1">
              {error?.confirmPassword}
            </p>
          </div>
          <div className="form-group form-check text-center mb-6">
            <input
              onClick={() => setCheck(checkRef.current.checked)}
              ref={checkRef}
              type="checkbox"
              name="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25"
            />
            <label
              className="form-check-label inline-block text-white"
              htmlFor="exampleCheck25"
            >
              I agree to all trams and conditions
            </label>
          </div>
          <button
            type="submit"
            className={`w-full
            px-6
            py-2.5
            bg-gradient-to-r from-sky-500 to-indigo-500
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
            ${!check && "opacity-25"}
            `}
            disabled={!check}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
