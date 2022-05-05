import React from "react";
import OwlCarousel from "react-owl-carousel";
import useItems from "../../../hooks/useItems";
import backgroundImage from "../../../image/wickedbackground.png";
import Loading from "../../Shared/Loading/Loading";
import './Banner.css'

const Banner = () => {
  const [items, setItems, loading] = useItems();
  const bannerItems = items.slice(3,6);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <OwlCarousel className="owl-theme" loop={true} items={1} autoplay={true} autoplayTimeout={3000} nav>
        {bannerItems.map((item) => (
          <div
            key={item._id}
            className="item h-[92vh] bg-cover bg-center flex"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="grid md:grid-cols-2 justify-items-center items-center gap-10 container mx-auto">
              <div className="md:order-1 order-2 p-4 md:text-left text-center">
                <h1 className="text-3xl uppercase my-2 text-slate-600 text font-semibold">{item?.name}</h1>
                <p className="my-3 font-thin text-lg">{item?.description}</p>
                <p className="text-xl text-gray-700">Price: {item?.price} Taka</p>
              </div>
              <div className="md:order-2 order-1">
                <img src={item?.img} alt="" className="max-w-xl-" />
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Banner;
