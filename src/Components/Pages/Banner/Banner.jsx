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
  const navScreen =  window.screen.availWidth < 800
  return (
    <div>
      <OwlCarousel className="owl-theme relative" loop={true} items={1} autoplay={true} autoplayTimeout={6000}  nav={navScreen? false: true} autoplayHoverPause={true}>
        {bannerItems.map((item) => (
          <div
            key={item._id}
            className="item md:h-screen min-h-screen bg-cover bg-center flex"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="grid md:grid-cols-2 justify-items-center items-center gap-10 container mx-auto">
              <div className="md:order-1 order-2 p-4 md:text-left text-center">
                <h1 className="text-3xl uppercase my-2 text-slate-600 text font-semibold">{item?.name}</h1>
                <p className="my-3 font-thin text-lg">{item?.description}</p>
                <p className="text-xl text-gray-700">Price: {item?.price} Taka</p>
              </div>
              <div 
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="md:order-2 order-1">
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