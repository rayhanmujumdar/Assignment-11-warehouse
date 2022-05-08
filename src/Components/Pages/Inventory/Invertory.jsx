import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useInventory from "../../../hooks/useInventory";
import Loading from "../../Shared/Loading/Loading";

const Inventory = () => {
  const { id } = useParams();
  const { item,loading,handleQuantity, handleDelivery } = useInventory(id);
  const { _id, name, description, price, supplier, img, quantity } = item;
  const [inputOpen, setInputOpen] = useState(false);
  if(loading){
      return <Loading></Loading>
  }
  return (
    <div className="container mx-auto grid md:grid-cols-2 justify-center items-center my-12 justify-items-center gap-x-4 md:h-[92vh]">
      <div 
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      >
        <img src={img} alt="" />
      </div>
      <div 
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className="text-left px-5">
        <h1 className="text-3xl uppercase my-2 text-slate-600 text font-semibold">
          {name}
        </h1>
        <p className="my-3 font-thin text-lg">{description}</p>
        <p className="text-xl text-gray-700 my-2">supplier: {supplier}</p>
        <p className="text-xl text-gray-700">Price: {price} Taka</p>
        <div className="text-xl my-2 flex justify-left items-center">
          Quantity:{" "}
          <span className="font-semibold text-red-400 ml-3">
            {
                inputOpen ? 
                <form onSubmit={(e) => handleQuantity(e,setInputOpen)} className="flex justify-center items-center ">
                    <input name="quantity" defaultValue={1} min={1} max={100} type="number" className="border-2 font-semibold outline-none border-gray-500 my-2" />
                    <button type="submit" className="bg-stone-800 text-white px-3 py-1.5 rounded active:bg-stone-600 hover:bg-stone-700 text-sm ml-2"> Submit</button>
                </form> 
                : quantity === 0 ? "Out of stock" : quantity
            }
          </span>
        </div>
        <div className="flex justify-between my-6">
          <button onClick={() => setInputOpen(!inputOpen)} className="bg-stone-800 text-white px-3 py-2 rounded active:bg-stone-600 hover:bg-stone-700">
            {inputOpen ? 'Close Update': 'Quantity Update'}
          </button>
          {!inputOpen && <button
            onClick={() => handleDelivery(_id, quantity)}
            className="bg-stone-800 text-white px-3 py-2 rounded active:bg-stone-600 hover:bg-stone-700 ml-4"
          >
            Delivery
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
