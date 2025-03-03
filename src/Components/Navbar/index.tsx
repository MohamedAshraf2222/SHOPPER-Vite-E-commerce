import logo from "../../Assets/logo.png";
import cart from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex justify-around w-full p-3 shadow top-0 left-0 absolute">
      <div className="flex items-center cursor-pointer">
        <Link className="flex items-center" to={"/"}>
          <img src={logo} alt="Logo" />
          <p className="text-[#171717] font-semibold text-[38px]">SHOPPER</p>
        </Link>
      </div>
      <ul className="flex items-center gap-[50px] text-[#626262] text-[20px] font-medium">
        <li className="cursor-pointer">
          <Link to={"/"}>Shop</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/men"}>Men</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/women"}>Women</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/kids"}>Kids</Link>
        </li>
      </ul>
      <div className="flex gap-[45px] items-center">
        <Link to={"/login"}>
          <button className="w-[155px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-medium cursor-pointer flex justify-center items-center py-5 leading-0 active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to={"/cart"} className="relative">
          <img className="cursor-pointer" src={cart} alt="Cart" />
          <div className="bg-red-600 text-white text-xs rounded-2xl flex justify-center items-center absolute w-[22px] h-[22px] -top-1.5 -right-2.5">
            0
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
