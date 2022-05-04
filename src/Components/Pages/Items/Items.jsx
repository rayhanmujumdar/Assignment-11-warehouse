import React from "react";
import useItems from "../../../hooks/useItems";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useItems();
  console.log(items);
  return (
    <div>
      <h1 className="text-3xl my-5">Items found {items.length}</h1>
      <div className="lg:container lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-5">
        {items.map((item) => (
          <Item item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
