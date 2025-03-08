import { all_product } from "../../Assets/all_product";
import dropdown_icon from "../../Assets/dropdown_icon.png";
import Item from "../../Components/Common/Item";

const ShopCategory = ({ category, banner }: any) => {
  const productsCount = all_product.filter((product: any) => {
    return product.category === category;
  });

  return (
    <div className="mt-[100px] md:mt-[150px]">
      {/* Banner */}
      <img src={banner} alt="banner" className="w-full" />

      {/* Sorting Section */}
      <div className="mt-8 md:mt-12 flex flex-col md:flex-row mx-4 md:mx-[170px] items-center justify-between gap-4">
        <p className="text-base md:text-lg">
          <span>
            Showing {productsCount.length >= 1 ? "1" : "0"}-
            {productsCount.length}
          </span>
        </p>
        <div className="border border-[#888] rounded-[40px] py-2 px-4 md:py-2.5 md:px-5 flex items-center gap-2 justify-center cursor-pointer">
          Sort By{" "}
          <img src={dropdown_icon} alt="dropdown_icon" className="w-4 md:w-6" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex my-8 md:my-[50px] gap-4 md:gap-8 flex-wrap justify-center">
        {all_product.map((product: any, i: number) => {
          if (category === product.category) {
            return <Item key={i} product={product} />;
          } else {
            return null;
          }
        })}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center items-center my-[100px] md:my-[150px] w-[200px] md:w-[233px] py-4 md:py-8 rounded-[50px] md:rounded-[75px] bg-[#ededed] text-[#787878] mx-auto font-medium text-base md:text-lg cursor-pointer">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
