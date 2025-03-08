import logo from "../../Assets/logo.png";
import cart from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const Nav = () => {
  const { getTotalCartItems } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full p-3 shadow top-0 left-0 fixed bg-white z-50">
      {/* Logo and Brand Name */}
      <div className="flex items-center cursor-pointer">
        <Link className="flex items-center" to={"/"}>
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <p className="text-[#171717] font-semibold text-xl md:text-3xl ml-2">
            SHOPPER
          </p>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-12 text-[#626262] text-lg font-medium">
        <li className="cursor-pointer hover:text-[#171717]">
          <Link to={"/"}>Shop</Link>
        </li>
        <li className="cursor-pointer hover:text-[#171717]">
          <Link to={"/men"}>Men</Link>
        </li>
        <li className="cursor-pointer hover:text-[#171717]">
          <Link to={"/women"}>Women</Link>
        </li>
        <li className="cursor-pointer hover:text-[#171717]">
          <Link to={"/kids"}>Kids</Link>
        </li>
      </ul>

      {/* Login and Cart */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link className="hidden md:block" to={"/login"}>
          <button className="w-24 md:w-36 outline-none border border-[#7a7a7a] rounded-full text-[#515151] text-sm md:text-lg font-medium cursor-pointer flex justify-center items-center py-2 md:py-3 hover:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to={"/cart"} className="relative">
          <img className="w-8 h-8 cursor-pointer" src={cart} alt="Cart" />
          <div className="bg-red-600 text-white text-xs rounded-full flex justify-center items-center absolute w-5 h-5 -top-1 -right-1">
            {getTotalCartItems()}
          </div>
        </Link>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white py-4 shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-y-16" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-[#626262] text-lg font-medium">
          <li className="cursor-pointer hover:text-[#171717]">
            <Link to={"/"} onClick={toggleMobileMenu}>
              Shop
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#171717]">
            <Link to={"/men"} onClick={toggleMobileMenu}>
              Men
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#171717]">
            <Link to={"/women"} onClick={toggleMobileMenu}>
              Women
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#171717]">
            <Link to={"/kids"} onClick={toggleMobileMenu}>
              Kids
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#171717]">
            <Link to={"/login"} onClick={toggleMobileMenu}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
