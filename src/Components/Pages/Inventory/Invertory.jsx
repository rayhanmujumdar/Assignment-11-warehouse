import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id} = useParams()
    const [item,setItem] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        axios.get(url)
        .then(res => {
            setItem(res.data)
        })
    },[id])
    const {name, description,price,supplier,img,quantity} = item
    return (
        <div className='container mx-auto grid md:grid-cols-2 justify-center items-center my-12 justify-items-center'>
            <div className='text-left px-5'>
                <h1 className='text-3xl uppercase my-2 text-slate-600 text font-semibold'>{name}</h1>
                <p className="my-3 font-thin text-lg">{description}</p>
                <p className='text-xl text-gray-700 my-2'>supplier: {supplier}</p>
                <p className='text-xl text-gray-700'>Price: {price} Taka</p>
                <p className='text-xl my-2'>Quantity: <span className='font-semibold text-red-400'>{quantity}</span></p>
                <div className='flex justify-between my-6'>
                <button className='bg-stone-800 text-white px-3 py-2 rounded active:bg-stone-600 hover:bg-stone-700'>Quantity Update</button>
                <button className='bg-stone-800 text-white px-3 py-2 rounded active:bg-stone-600 hover:bg-stone-700'>Delivery</button>
                </div>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Inventory;