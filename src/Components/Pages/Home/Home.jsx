import React from "react";
import Item from "../../Pages/Item/Item";
import useItems from "../../../hooks/useItems";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import Banner from "../Banner/Banner";

const Home = () => {
  const [items, setItems,loading] = useItems();
  const navigate = useNavigate()
  if(loading){
      return <Loading></Loading>
  }
  return (
    <div>
        <Banner></Banner>
        <h1 className="text-3xl font-semibold my-3">Inventory <span className="text-[#2C5364]">items</span> {items.slice(0,6).length}</h1>
      <div className="lg:container lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-5">
        {items.slice(0,6).map((item) => (
          <Item item={item} key={item._id}></Item>
        ))}
      </div>
      <button onClick={() => navigate('/items')} type="button" className=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out my-10">See more</button>
    </div>
  );
};

export default Home;
