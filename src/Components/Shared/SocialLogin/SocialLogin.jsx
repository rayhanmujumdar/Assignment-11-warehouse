import React from "react";
const SocialLogin = ({ handleGoogleSignIn }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-5">
        <div className="h-1 w-full bg-gray-400"></div>
        <p className="mx-4 text-white">Or</p>
        <div className="h-1 w-full bg-gray-400"></div>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="w-80 border flex justify-center items-center py-2 mx-auto rounded-md"
      >
        <i className="fa-brands fa-google text-xl text-yellow-500 mr-4"></i>
        <p className="text-xl text-white">Continue with Google</p>
      </button>
    </div>
  );
};

export default SocialLogin;
