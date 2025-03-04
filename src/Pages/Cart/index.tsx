import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import remove_icon from "../../Assets/cart_cross_icon.png";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    all_product,
    getTotalCartAmount,
    getTotalCartItems,
  } = useContext(CartContext);
  return (
    <div className="mt-[89px] my-28 mx-[170px]">
      {getTotalCartItems() > 0 ? (
        <>
          <div className="cartItem-grid grid items-center py-5 gap-[75px] text-[#454545] text-lg font-semibold">
            <p className="">Products</p>
            <p className="">Title</p>
            <p className="">Price</p>
            <p className="">Quantity</p>
            <p className="">Total</p>
            <p className="">Remove</p>
          </div>
          <hr className="h-0.5 bg-[#e2e2e2] border-0" />
          {all_product.map((product: any) => {
            if (cartItems[product.id] > 0) {
              return (
                <div className="">
                  <div className="cartItem-grid grid items-center py-5 gap-[75px] text-[#454545] text-base font-medium justify-center">
                    <img
                      src={product.image}
                      alt="product.image"
                      className="h-[62px]"
                    />
                    <p className=" mx-auto">{product.name}</p>
                    <p className=" mx-auto">${product.new_price}</p>
                    <button className="w-16 py-4 border-2 border-[#ebebeb] bg-white mx-auto">
                      {cartItems[product.id]}
                    </button>
                    <p className=" mx-auto">
                      {cartItems[product.id] * product.new_price}
                    </p>
                    <img
                      src={remove_icon}
                      className="w-[15px] mx-auto cursor-pointer"
                      onClick={() => removeFromCart(product.id)}
                      alt=""
                    />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
          <div className="flex my-[100px]">
            <div className="flex-1 flex flex-col mr-[200px] gap-10">
              <h2 className="text-4xl font-semibold text-[#171717]">
                Cart Total
              </h2>
              <div className="flex flex-col justify-between py-[15px]">
                <div className="flex justify-between text-[#454545] text-xl my-4 ">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="flex justify-between text-[#454545] text-xl my-4 ">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between text-[#454545] text-2xl my-4 font-medium">
                  <p>Total</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
              </div>
              <button className="w-[262px] h-[58px] border-none outline-none text-white bg-[#ff5a5a] font-semibold cursor-pointer">
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="flex flex-col flex-1 font-medium">
              <p className="text-[#555]">
                If you have a promo code, Enter it here
              </p>
              <div className=" mt-3.5 pl-5 h-[58px] bg-[#eaeaea]">
                <input
                  type="text"
                  className="w-[80%] border-none outline-none bg-transparent h-[50px]"
                  name=""
                  id=""
                />
                <button className="bg-black text-white w-[20%] h-[58px] cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="font-semibold text-5xl my-85">
          No Items In Your Cart
        </div>
      )}
    </div>
  );
};

export default Cart;
