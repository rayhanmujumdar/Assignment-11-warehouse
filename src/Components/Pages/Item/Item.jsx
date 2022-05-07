import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, img, name, price, description, quantity, supplier } = item;
  const [des, setDes] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="flex justify-center"
    >
      <div className="rounded-lg shadow-lg bg-[#2C5364] max-w-sm flex flex-col justify-end">
        <div>
          <img className="rounded-t-lg py-2" src={img} alt="" />
        </div>
        <div className="p-6 text-left">
          <h5 className="text-gray-200 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-300 text-base mb-2">
            {des ? description : description.slice(0, 100)}{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => setDes(!des)}
            >
              {" "}
              {des ? "Less..." : "More..."}
            </span>
          </p>
          <p className="text-xl text-gray-300">Supplier: {supplier}</p>
          <p className="text-xl text-gray-300">Price: {price} Taka</p>
          <p className="text-xl text-gray-300 mb-4">
            Quantity: {quantity === 0 ? "Out of Stock" : quantity}
          </p>
          <button
            onClick={() => navigate(`/inventory/${_id}`)}
            type="button"
            className="w-full inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            Stock Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
