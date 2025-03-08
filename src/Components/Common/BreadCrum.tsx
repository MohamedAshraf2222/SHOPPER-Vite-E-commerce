import { Link } from "react-router-dom";
import arrow_icon from "../../Assets/breadcrum_arrow.png";

const BreadCrum = ({ product }: any) => {
  return (
    <div className="flex flex-wrap gap-2 items-center text-[#5e5e5e] font-semibold my-8 sm:my-14 mt-20 sm:mt-28 mx-4 sm:mx-10 md:mx-20 lg:mx-40 text-sm sm:text-base">
      {/* Breadcrumb Links */}
      <Link to="/" className="hover:text-[#ff4141]">
        HOME
      </Link>
      <img className="h-3 sm:h-4" src={arrow_icon} alt="arrow_icon" />
      <Link to="/shop" className="hover:text-[#ff4141]">
        SHOP
      </Link>
      <img className="h-3 sm:h-4" src={arrow_icon} alt="arrow_icon" />
      <span className="capitalize">{product.category}</span>
      <img className="h-3 sm:h-4" src={arrow_icon} alt="arrow_icon" />
      <span className="truncate">{product.name}</span>
    </div>
  );
};

export default BreadCrum;
