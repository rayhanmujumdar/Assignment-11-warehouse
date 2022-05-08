import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="bg-[#2C5364]">
      <div className="lg:container lg:mx-auto mx-5 border-b border-b-gray-400">
        <div className="grid lg:grid-cols-3 lg:justify-items-center md:grid-cols-2 gap-x-4">
          <div className="py-5 text-left">
            <Link to="/" className="text-2xl text-white pr-2 font-semibold mb-2 inline-block">
              <span className="text-amber-400">M</span>y
              <span className="text-2xl text-orange-600">C</span>hoose
              <span className="text-blue-500 text-2xl">H</span>ouse
            </Link>
            <div className="flex items-center text-white mb-3">
              <i className="fa-solid fa-phone text-3xl text-white mr-3"></i>
              <div>
                <p>Call Customer Service,We Support 24/7:</p>
                <p>01873873847</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <i className="fa-solid fa-location-dot text-3xl mr-3"></i>
              <div>
                <h1>Address:</h1>
                <p>Hajigonj Zero point road</p>
              </div>
            </div>
          </div>
          <div className="text-white py-4">
            <h1 className="text-xl font-bold text-left uppercase">Quick Links</h1>
            <ul className="text-left">
              <li>
                <Link to="home" className="underline hover:text-blue-500">Home</Link>
              </li>
              <li>
                <Link to="items" className="underline hover:text-blue-500">Items</Link>
              </li>
              <li>
                <Link to="manage-items" className="underline hover:text-blue-500">Manage Items</Link>
              </li>
              <li>
                <Link to="add-item" className="underline hover:text-blue-500">Add Item</Link>
              </li>
              <li>
                <Link to="my-items" className="underline hover:text-blue-500">My Items</Link>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h1 className="text-white font-bold uppercase text-left">newSletter</h1>
            <div className="text-white text-2xl flex justify-left mt-5 gap-x-5">
              <a href="#!">
                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#!">
                <i className="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#!">
                <i className="fa-brands fa-pinterest" aria-hidden="true"></i>
              </a>
              <a href="#!">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
          <h1 className="text-white">Copyright © {year} MyChooseHouse. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
