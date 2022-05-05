import React from "react";
import useItems from "../../../hooks/useItems";
import Loading from "../../Shared/Loading/Loading";
import Item from "../Item/Item";
const Items = () => {
  const [items, setItems,loading] = useItems();
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold my-3">Items <span className="text-[#2C5364]">found</span> {items.length}</h1>
      <div className="lg:container lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-5">
        {items.map((item) => (
          <Item item={item} key={item._id}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;