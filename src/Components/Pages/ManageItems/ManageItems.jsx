import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useItems from "../../../hooks/useItems";
import Loading from "../../Shared/Loading/Loading";
import './MangeItems.css'

const ManageItems = () => {
  const navigate = useNavigate();
  const [items, setItems, loading] = useItems();
  const [del,setDel] = useState(false)
  if (loading) {
    return <Loading></Loading>;
  }
  const handleDeleteItem = () =>{
    const itemDelete = window.confirm('are you sure')
    setDel(itemDelete)
  }
  if(del){
    
  }
  return (
    <div className="my-5">
        <h1 className="my-2 text-4xl ">Inventory<span className="text-yellow-600"> Manage</span></h1>
        <button onClick={() => navigate('/add-item')} className="bg-green-700 text-white px-10 py-2 rounded-md my-3 hover:bg-green-800">Add items</button>
      <div className=" flex flex-col">
        <div className="scroll_bar overflow-x-auto">
          <div className="py-2 inline-block md:min-w-xl sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left text-white"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-center"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-center"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-center"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-center"
                    >
                      Supplier
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-center"
                    >
                      Manage Inventory
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap text-left">
                        {item.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item?.email || "Not found"}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item?.quantity}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item?.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item?.quantity * item?.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item?.supplier}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div>
                          <button
                            onClick={() => navigate(`/inventory/${item._id}`)}
                            className="mr-3 bg-yellow-500 px-3 py-1 rounded-md hover:bg-yellow-600 text-gray-600 hover:text-white"
                          >
                            Update Stock
                          </button>
                          <button onClick={handleDeleteItem} className="mr-3 bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 text-gray-200">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
