import arrow_icon from "../../Assets/breadcrum_arrow.png";
const BreadCrum = ({ product }: any) => {
  return (
    <div className="flex gap-2 items-center text-[#5e5e5e] font-semibold my-14 mt-28 mx-40">
      HOME <img className="h-4" src={arrow_icon} alt="arrow_icon" /> SHOP{" "}
      <img className="h-4" src={arrow_icon} alt="arrow_icon" />{" "}
      <span className="capitalize">{product.category}</span>{" "}
      <img className="h-4" src={arrow_icon} alt="arrow_icon" /> {product.name}
    </div>
  );
};

export default BreadCrum;
