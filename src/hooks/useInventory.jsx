import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosPrivate from "../api/axiosPrivate";

const useInventory = (id) => {
  const [item, setItem] = useState({});
  const [dataReload,setDataReLoad] = useState(false)
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const url = `https://assignment-11-server-side.vercel.app/api/v1/warehouse/items/${id}`;
    axios.get(url).then((res) => {
      setItem(res.data);
      setLoading(false)
    });
}, [id,dataReload]);
// handle quantity management
const handleQuantity = async (e,setInputOpen) => {
    e.preventDefault()
    const inputValue = e.target.quantity.value
    const quantity = item?.quantity + parseInt(inputValue)
    const quantityUpdate = {...item,quantity}
    const url = `https://assignment-11-server-side.vercel.app/api/v1/warehouse/items/${id}`
    const {data} = await axiosPrivate.put(url,quantityUpdate)
    if(data.modifiedCount){
        toast.success("Product stocked",{
            id: "success",
            duration: 5000
        })
        setInputOpen(false)
        setDataReLoad(!dataReload)
    }else{
        toast.error('Not Update',{
            id: 'error'
        })
    }
}
// handle delivery items
const handleDelivery = async (id) => {
    const quantity = item?.quantity - 1
    if(quantity < 0){
        toast('product out of stock',{
            id: 'product',
            icon: '❌',
            duration: 4000,
            className: 'text-xl font-semibold'
        })
    }else{
        const deliveryProduct = {...item,quantity}
        const url = `https://assignment-11-server-side.vercel.app/api/v1/warehouse/items/${id}`
        const {data} = await axiosPrivate.put(url,deliveryProduct)
        if(data.modifiedCount){
            toast.success('Delivered',{
                id: "success"
            })
            setDataReLoad(!dataReload)
        }else{
            toast.error('Not Delivered',{
                id: 'error'
            })
        }
    }

}
  return { 
    item,
    loading,
    handleQuantity,
    handleDelivery
};
};

export default useInventory;
