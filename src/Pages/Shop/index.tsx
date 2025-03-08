import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png";
import hero from "../../Assets/hero_image.png";
import exclusive_image from "../../Assets/exclusive_image.png";
import { data_product } from "../../Assets/data.js";
import { new_collections } from "../../Assets/new_collections.ts";
import Item from "../../Components/Common/Item";

const Shop = () => {
  return (
    <div className="mt-[100px] md:mt-[150px]">
      {/* Hero Section */}
      <section className="shops-bg flex flex-col md:flex-row items-center md:pl-10 lg:pl-20 p-4">
        <div className="flex flex-col flex-1 justify-center text-left gap-4 md:gap-5">
          <h2 className="text-[#090909] text-xl md:text-2xl font-semibold">
            New Arrivals Only
          </h2>
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-center items-center gap-3 md:gap-5">
              <p className="text-[#171717] text-3xl md:text-[50px] font-bold">
                New
              </p>
              <img
                className="w-16 md:w-[105px]"
                src={hand_icon}
                alt="hand icon"
              />
            </div>
            <p className="text-[#171717] text-3xl md:text-[50px] font-bold">
              Collections
            </p>
            <p className="text-[#171717] text-3xl md:text-[50px] font-bold">
              For Everyone
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 md:gap-4 cursor-pointer w-[200px] md:w-[310px] h-[50px] md:h-[70px] rounded-[50px] md:rounded-[75px] bg-[#ff4141] text-white text-lg md:text-2xl font-medium">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow icon" className="w-4 md:w-6" />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center mt-8 md:mt-0">
          <img src={hero} alt="hero" className="w-[80%] md:w-full" />
        </div>
      </section>

      {/* Popular in Women Section */}
      <section className="py-10 md:py-20">
        <div className="flex justify-center items-center h-auto gap-2.5 flex-col">
          <h1 className="capitalize text-[#171717] text-3xl md:text-[50px] font-semibold">
            Popular in Women
          </h1>
          <hr className="w-[150px] md:w-[200px] h-1.5 rounded-xl bg-[#252525]" />
          <div className="flex mt-8 md:mt-[50px] gap-4 md:gap-8 flex-wrap justify-center">
            {data_product.map((product: any) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <section className="py-10 md:py-20">
        <div className="flex flex-col md:flex-row m-auto mb-[100px] md:mb-[150px] shops-bg py-10 md:py-0 px-4 md:px-16">
          <div className="flex flex-1 justify-center items-start flex-col">
            <h2 className="text-4xl md:text-[80px] text-[#171717] font-semibold">
              Exclusive
            </h2>
            <h2 className="text-4xl md:text-[80px] text-[#171717] font-semibold">
              Offers For You
            </h2>
            <p className="text-lg md:text-[22px] text-[#171717] font-semibold">
              ONLY ON BEST SELLER PRODUCTS
            </p>
            <button className="w-[200px] md:w-[282px] h-[50px] md:h-[70px] rounded-3xl md:rounded-4xl text-white border-none bg-[#ff4141] text-lg md:text-[22px] font-medium mt-6 md:mt-8 cursor-pointer">
              Check Now
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end pt-8 md:pt-12">
            <img
              src={exclusive_image}
              alt="exclusive_image"
              // className="w-[80%] md:w-full"
            />
          </div>
        </div>
      </section>

      {/* New Collection Section */}
      <section className="py-10 md:py-20">
        <div className="flex justify-center items-center gap-2.5 flex-col">
          <h1 className="capitalize text-[#171717] text-3xl md:text-[50px] font-semibold">
            New Collection
          </h1>
          <hr className="w-[150px] md:w-[200px] h-1.5 rounded-xl bg-[#252525]" />
          <div className="flex mt-8 md:mt-[50px] gap-4 md:gap-8 flex-wrap justify-center">
            {new_collections.map((product: any) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 md:py-20">
        <div className="shops-bg pt-[40px] md:pt-[60px] flex flex-col items-center justify-center m-auto my-[100px] md:my-[150px] gap-4 md:gap-8 px-4">
          <h2 className="text-2xl md:text-[55px] text-[#454545] font-semibold text-center">
            Get Exclusive Offers On Your Email
          </h2>
          <p className="text-base md:text-[20px] text-[#454545] text-center">
            Subscribe to our newsletter and stay updated
          </p>
          <div className="flex justify-between items-center bg-white border border-[#e3e3e3] rounded-[50px] md:rounded-[80px] h-[50px] md:h-[70px] w-full md:w-1/2 px-4">
            <input
              className="border-none outline-none text-[#616161] pl-2 md:pl-5 w-full h-full"
              type="email"
              placeholder="Your Email"
            />
            <button className="bg-black text-white rounded-[50px] md:rounded-[80px] cursor-pointer px-6 md:px-12 h-[50px] md:h-[70px]">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
