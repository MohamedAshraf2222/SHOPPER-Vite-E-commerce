import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png";
import hero from "../../Assets/hero_image.png";
import exclusive_image from "../../Assets/exclusive_image.png";
import { data_product } from "../../Assets/data.js";
import { new_collections } from "../../Assets/new_collections.ts";
import Item from "../../Components/Common/Item";

const Shop = () => {
  return (
    <div className="mt-[150px]">
      <section className="h-[80vh] flex">
        <div className="flex flex-col flex-1 justify-center text-left gap-5">
          <h2 className="text-[#090909] text-2xl font-semibold">
            New Arrivals Only
          </h2>
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-center items-center gap-5">
              <p className="text-[#171717] text-[50px] font-bold">New</p>
              <img className="w-[105px]" src={hand_icon} alt="hand icon" />
            </div>
            <p className="text-[#171717] text-[50px] font-bold">Collections</p>
            <p className="text-[#171717] text-[50px] font-bold">For Everyone</p>
          </div>
          <div className="flex justify-center items-center gap-4 cursor-pointer w-[310px] h-[70px] rounded-[75px] bg-[#ff4141] text-white text-2xl font-medium">
            <div className="">Latest Collection</div>
            <img src={arrow_icon} alt="arrow icon" />
          </div>
        </div>
        <div className="flex flex-1">
          <img src={hero} alt="hero" />
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center h-[90vh] gap-2.5 flex-col">
          <h1 className="capitalize text-[#171717] text-[50px] font-semibold">
            Popular in Women
          </h1>
          <hr className="w-[200px] h-1.5 rounded-xl bg-[#252525]" />
          <div className="flex mt-[50px] gap-8">
            {data_product.map((product: any) => {
              console.log(product.name);
              return <Item product={product} />;
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="flex m-auto mb-[150px] ">
          <div className="flex flex-1 justify-center items-start flex-col">
            <h2 className="text-[80px] text-[#171717] font-semibold">
              Exclusive
            </h2>
            <h2 className="text-[80px] text-[#171717] font-semibold text-nowrap">
              Offers For You
            </h2>
            <p className="text-[22px] text-[#171717] font-semibold">
              ONLY ON BEST SELLER PRODUCTS
            </p>
            <button className="w-[282px] h-[70px] rounded-4xl text-white border-none bg-[#ff4141] text-[22px] font-medium mt-8 cursor-pointer">
              Check Now
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end pt-12">
            <img src={exclusive_image} alt="exclusive_image" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center gap-2.5 flex-col">
          <h1 className="capitalize text-[#171717] text-[50px] font-semibold">
            New Collection
          </h1>
          <hr className="w-[200px] h-1.5 rounded-xl bg-[#252525]" />
          <div className="flex mt-[50px] gap-8 flex-wrap">
            {new_collections.map((product: any) => {
              console.log(product.name);
              return <Item product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
