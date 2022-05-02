import React, { useEffect, useState } from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

import auth from "../../../firebase/firebase.init";
import FormModal from "../../Shared/FormModal/FormModal";
import Loading from "../../Shared/Loading/Loading";


const Verify = () => {
  const [user] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
  useSendEmailVerification(auth);
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const handleVerifyEmail = async (e) => {
      e.preventDefault()
    await sendEmailVerification(user?.email)
    if(!error){
      toast.success('Sent email',{
        id: 'success'
    })
    setIsOpen(false)
    }
  }
  useEffect(() => {
    if(error){
      toast.error(error.code,{
        id: 'error'
      })
    }
  },[error])
  if(sending){
      return <Loading></Loading>
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <h1
        className="text-2xl mt-3 text-green-600"
        style={{ fontFamily: "'Radio Canada', sans-serif" }}
      >
        Please verify email
      </h1>
      <button
        className="my-4 bg-[#2C5364] text-white px-4 py-2 rounded-sm"
        onClick={openModal}
      >
        verify Email
      </button>
      <FormModal
      closeModal={closeModal}
      modalIsOpen={modalIsOpen} 
      handleEmail={handleVerifyEmail}
      readonly={true}
      text={"please verify account"}
      user={user}>
      </FormModal>
    </div>
  );
};

export default Verify;
