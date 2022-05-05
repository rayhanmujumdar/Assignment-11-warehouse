import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import useLogin from "../../../hooks/useLogin";
import useSocialLogIn from "../../../hooks/useSocialLogin";
import useToken from "../../../hooks/useToken";
import FormModal from "../../Shared/FormModal/FormModal";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  // login user auth
  const { handleSignIn, signInUser } = useLogin();
  //social login user auth
  const { handleGoogleSignIn, googleAuth } = useSocialLogIn();
  const { googleUser, googleLoading } = googleAuth;

  const [inUser, inLoading] = signInUser;
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  // reset password hooks
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  // json web token hooks
  const [token] = useToken(inUser || googleUser);
  useEffect(() => {
    if (token || user) {
      navigate(from, { replace: true });
    }
  }, [user,token]);
  useEffect(() => {
    if (error) {
      toast.error(error.code, {
        id: "error",
      });
    }
  }, [error]);
  if (loading) {
    return <Loading></Loading>;
  }
  // forget password section code
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleForgetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    if (!error) {
      toast.success("reset email sent", {
        id: "success",
      });
      setIsOpen(false);
    }
  };
  if (sending || inLoading || googleLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="input_from text-white block p-6 mx-5 rounded-lg shadow-lg bg-white md:max-w-lg max-w-md md:mx-auto py-10 my-10">
        <form onSubmit={handleSignIn}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label mb-2 text-white block text-left"
            >
              Email address
            </label>
            <input
              required
              type="email"
              name="email"
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
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label mb-2 text-white block text-left"
            >
              Password
            </label>
            <input
              required
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
              id="exampleInputPassword2"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-white"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <a
              onClick={openModal}
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
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
      ease-in-out"
          >
            Sign in
          </button>
          <p className="text-white mt-6 text-center ">
            Not a member?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
          {/* forget password modal */}
          <FormModal
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            handleEmail={handleForgetPassword}
            text={"Forget password email type"}
            readonly={false}
          ></FormModal>
        </form>
        <SocialLogin handleGoogleSignIn={handleGoogleSignIn}></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
