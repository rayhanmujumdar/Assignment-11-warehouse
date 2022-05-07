import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Additem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user,loading] = useAuthState(auth)
    const formRef = useRef()
    if(loading){
        return <Loading></Loading>
    }
    const onSubmit = data => {
        const url = `http://localhost:5000/items`
        axiosPrivate.put(url,data)
        .then(res => {
            if(res.data.acknowledged){
                toast.success('successfully added',{
                    id: 'success'
                })
                formRef.current.reset()
            }
        })
};
    return (
      <div className='my-10 bg-gray-600 max-w-sm md:max-w-lg py-5 rounded-md mx-auto'>
          <h1 className='mb-4 text-3xl text-white'>Add Your <span className='text-red-600'>Product</span></h1>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center" autoComplete='off'>
        <input className='border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none' {...register("name", { required: true, maxLength: 40 ,})} placeholder='Product name'/>
        <input type='email' className='border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none' {...register("email", { required: true})} placeholder='Email' value={user?.email} readOnly/>
        <input className='border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none' {...register("supplier",{required: true})} placeholder='supplier'/>
        <input className='border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none' {...register("img")} placeholder='Photo Url'/>
        <input type='number' className='input_field border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none' {...register("price",{required: true})} placeholder='Price' min={1}/>
        <input type='number' className='input_field border border-gray-500 md:w-[400px] w-[350px] pl-2 py-2 mb-5 outline-none' {...register("quantity", { required: true})} placeholder='Quantity' min={1} max={100}/>
        <textarea className='border border-gray-500 md:w-[400px] w-[350px] h-32 p-1 outline-none resize-none mb-5' {...register("description")} placeholder='Description'></textarea>
        <input type="submit" className="mr-3 bg-green-500 px-6 py-1 rounded-sm hover:bg-green-600 text-gray-200"/>
      </form>
      </div>
    )
};

export default AddItem;