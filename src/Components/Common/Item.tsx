import { Link } from "react-router-dom";

const Item = ({ product }: any) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-[150px] sm:w-[200px] md:w-[280px] hover:scale-[1.05] hover:transition-all hover:duration-[600ms] cursor-pointer">
      <Link to={`/product/${product.id}`} onClick={scrollToTop}>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover"
        />

        {/* Product Name */}
        <p className="my-1.5 text-sm sm:text-base md:text-lg">{product.name}</p>

        {/* Product Prices */}
        <div className="flex gap-3 sm:gap-5">
          <div className="text-[#374151] text-sm sm:text-base md:text-lg font-semibold">
            ${product.new_price}
          </div>
          <div className="text-[#8c8c8c] text-sm sm:text-base md:text-lg font-medium line-through">
            ${product.old_price}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
