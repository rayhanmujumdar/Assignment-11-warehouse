import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../../../image/404.png";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="my-20 flex md:flex-row flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col justify-evenly items-center lg:container lg:mx-auto">
        <div className="lg:basis-5/6 md:basis-4/6 md:mx-0 mx-10">
          <img src={notFoundImg} alt="" className="md:w-[800px] mx-auto" />
        </div>
        <div className="basis-2/6">
          <h1 className="text-3xl ">404</h1>
          <p>Not found</p>
          <button onClick={() => navigate('/')} className="bg-slate-600 text-white px-10 py-2 rounded-md mt-4">Go to home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
