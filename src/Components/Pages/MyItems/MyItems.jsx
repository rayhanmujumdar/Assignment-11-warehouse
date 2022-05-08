import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading'
import Item from '../Item/Item';

const MyItems = () => {
    const [myItem,setMyItem] = useState([])
    const [user] = useAuthState(auth)
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const getMyItem = async () => {
            if(user){
                const url = `https://fathomless-earth-22258.herokuapp.com/items?email=${user?.email}`
                const {data} = await axiosPrivate.get(url)
                setMyItem(data)
                setLoading(false)
            }
        }
        getMyItem()
    },[user])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl my-3 font-semibold border-b-4 border-black inline-block pb-1'>My <span className='text-yellow-700'>Items</span></h1>
            {myItem.length ? <div className="lg:container lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-5">
            {
                myItem.map(item => <Item key={item._id} item={item}></Item>)
            }
        </div> : <p className='text-center mb-3 text-xl text-red-600'>No Items added!!</p>}
        </div>
    );
};

export default MyItems;