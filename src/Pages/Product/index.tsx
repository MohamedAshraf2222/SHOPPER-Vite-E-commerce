import { useContext } from "react";
import { useParams } from "react-router-dom";
import { all_product } from "../../Assets/all_product";
import BreadCrum from "../../Components/Common/BreadCrum";
import Star_icon from "../../Assets/star_icon.png";
import Star_dull_icon from "../../Assets/star_dull_icon.png";
import Item from "../../Components/Common/Item";
import { CartContext } from "../../Context/CartContext";

const Product = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = all_product.find((e: any) =>
    productId ? e.id === +productId : null
  );

  return (
    <div className="mt-[89px]">
      <BreadCrum product={product} />
      <div className="flex mb-10 mx-40">
        <div className="flex gap-4 flex-1">
          <div className="flex flex-col gap-4">
            <img
              className="h-[163px] object-cover"
              src={product.image}
              alt="Product Image"
            />
            <img
              className="h-[163px] object-cover"
              src={product.image}
              alt="Product Image"
            />
            <img
              className="h-[163px] object-cover"
              src={product.image}
              alt="Product Image"
            />
            <img
              className="h-[163px] object-cover"
              src={product.image}
              alt="Product Image"
            />
          </div>
          <div className="h-[700px]">
            <img
              className="h-full object-cover"
              src={product.image}
              alt="Product Image"
            />
          </div>
        </div>
        <div className="flex flex-col mx-16 flex-1">
          <h2 className="text-[#3d3d3d] text-[40px] font-bold">
            {product.name}
          </h2>
          <div className="flex items-center mt-3 gap-1.5 text-[#1c1c1c]">
            <img src={Star_icon} alt="Star_Icon" />
            <img src={Star_icon} alt="Star_Icon" />
            <img src={Star_icon} alt="Star_Icon" />
            <img src={Star_icon} alt="Star_Icon" />
            <img src={Star_dull_icon} alt="Star_Icon" />
            <p>(122)</p>
          </div>
          <div className="flex my-10 gap-8 text-[24px] font-bold">
            <div className="text-[#818181] line-through">
              ${product.old_price}
            </div>
            <div className="text-[#ff4141]">${product.new_price}</div>
          </div>
          <div className="">{product.description}</div>
          <div className="">
            <h3 className="mt-14 text-[#656565] text-xl font-semibold">
              Select Size
            </h3>
            <div className="flex my-7 gap-5">
              <div className="py-[18px] px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
                S
              </div>
              <div className="py-[18px] px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
                M
              </div>
              <div className="py-[18px] px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
                L
              </div>
              <div className="py-[18px] px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
                XL
              </div>
              <div className="py-[18px] px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
                XXL
              </div>
            </div>
          </div>
          <button
            onClick={() => addToCart(product.id)}
            className="text-white py-5 px-10 w-1/2 font-semibold bg-[#ff4141] mb-10 border-none outline-none cursor-pointer"
          >
            ADD TO CART
          </button>
          <p>
            <span className="font-semibold">Category:</span>
            {product.category}, {product.type}
          </p>
        </div>
      </div>
      <div className="my-[120px] mx-44">
        <div className="flex">
          <div className="flex items-center justify-center font-semibold w-40 py-9 border border-[#d0d0d0] cursor-pointer">
            Description
          </div>
          <div className="bg-[#fbfbfb] text-[#555] flex items-center justify-center w-40 py-9 cursor-pointer">
            Reviews (122)
          </div>
        </div>
        <div className="flex border border-[#d0d0d0] p-12 pb-16">
          <p>
            Welcome to SHOPPER, your one-stop destination for high-quality,
            stylish, and affordable products! We offer a carefully curated
            selection of items designed to meet your everyday needs, from trendy
            fashion to essential lifestyle products. Our mission is to provide
            you with a seamless shopping experience, combining user-friendly
            navigation, secure payments, and fast delivery. Whether you're
            looking for the latest trends or timeless classics, we’ve got
            something for everyone. Shop with confidence and discover the
            perfect blend of quality, style, and convenience at SHOPPER !
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2.5 flex-col mb-20">
        <h1 className="capitalize text-[#171717] text-[50px] font-semibold">
          Related Products
        </h1>
        <hr className="w-[200px] h-1.5 rounded-xl bg-[#252525]" />
        <div className="flex mt-[50px] gap-8 flex-wrap justify-center">
          {all_product
            .filter((singleProduct: any) => {
              return (
                singleProduct.category === product.category &&
                singleProduct.id != product.id
              );
            })
            .slice(0, 4)
            .map((singleProduct: any, i: number) => {
              return <Item key={i} product={singleProduct} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
