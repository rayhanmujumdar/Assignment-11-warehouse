import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import emptyImg from '../../../image/empty-img.jpg'

const Profile = () => {
  const [user, loading] = useAuthState(auth);
    console.log(user?.photoURL)
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-md md:h-[40vh] my-10 p-3 bg-slate-400 bg-opacity-50 mx-auto rounded-md">
      <div className="flex justify-center mx-3 md:mt-10">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-50 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={user?.photoURL || emptyImg}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2 min-w-[200px]">{user?.displayName}</h5>
            <p className={`text-2xl font-bold text-green-600`}>Verify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
