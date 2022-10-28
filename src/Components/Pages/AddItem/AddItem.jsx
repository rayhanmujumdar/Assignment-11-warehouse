import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase/firebase.init";
import "./Additem.css";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const [addLoading, setAddLoading] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if(formRef.current.name.value){
    setAddLoading(true);
    const formData = {...data,quantity: parseInt(data.quantity)}
    const url = `https://assignment-11-server-side.vercel.app/api/v1/warehouse/items?email=${user?.email}`;
    axiosPrivate
      .put(url, formData)
      .then((res) => {
        setAddLoading(false);
        if (res.data.acknowledged) {
          toast.success("successfully added", {
            id: "success",
          });
          formRef.current.reset();
        }
      })
      .catch((error) => {
        if (error.response.status === 403 || error.response.status === 401) {
          toast.error("Unauthorize/please login", {
            id: "error",
          });
          signOut(auth);
          navigate("/login");
          setAddLoading(false);
        }
      });
    }
  };
  return (
    <div className="my-10 bg-gray-600 max-w-sm md:max-w-lg py-5 rounded-md mx-auto">
      <h1 className="mb-4 text-3xl text-white">
        Add Your <span className="text-red-600">Product</span>
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
        autoComplete="off"
      >
        <input
          className="border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none"
          {...register("name", { required: true, maxLength: 40 })}
          placeholder="Product name"
        />
        <input
          type="email"
          className="border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none"
          {...register("email", { required: true })}
          placeholder="Email"
          value={user?.email}
          readOnly
        />
        <input
          className="border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none"
          {...register("supplier", { required: true })}
          placeholder="supplier"
        />
        <input
          className="border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none"
          {...register("img")}
          placeholder="Photo Url"
        />
        <input
          type="number"
          className="input_field border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none"
          {...register("price", { required: true })}
          placeholder="Price"
          min={1}
        />
        <input
          type="number"
          className="input_field border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none"
          {...register("quantity", { required: true })}
          placeholder="Quantity"
          min={1}
          max={100}
        />
        <textarea
          className="border border-gray-500 md:w-[400px] w-[350px] h-32 p-1 outline-none resize-none mb-5"
          {...register("description")}
          placeholder="Description"
        ></textarea>
        <input
          type="submit"
          value={addLoading ? 'wait...': 'Submit'}
          className="mr-3 bg-green-500 px-6 py-1 rounded-sm hover:bg-green-600 text-gray-200"
        />
      </form>
    </div>
  );
};

export default AddItem;
