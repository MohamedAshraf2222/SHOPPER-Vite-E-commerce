import { all_product } from "../../Assets/all_product";
import dropdown_icon from "../../Assets/dropdown_icon.png";
import Item from "../../Components/Common/Item";
const ShopCategory = ({ category, banner }: any) => {
  const productsCount = all_product.filter((product: any) => {
    return product.category === category;
  });
  return (
    <div className="mt-[150px]">
      <img src={banner} alt="" />
      <div className="mt-12 flex mx-[170px] items-center justify-between">
        <p>
          <span className="">
            Showing {productsCount.length >= 1 ? "1" : "0"}-
            {productsCount.length}
          </span>
        </p>
        <div className="border border-[#888] rounded-[40px] py-2.5 px-5 flex items-center gap-2 justify-center cursor-pointer">
          Sort By <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="flex my-[50px] gap-8 flex-wrap justify-center">
        {all_product.map((product: any, i: number) => {
          if (category === product.category) {
            return <Item key={i} product={product} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-[150px] w-[233px] py-8 rounded-[75px] bg-[#ededed] text-[#787878] mx-auto font-medium text-lg cursor-pointer">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
