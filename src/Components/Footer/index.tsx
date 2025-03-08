import footer_logo from "../../Assets/logo_big.png";
import insta_icon from "../../Assets/instagram_icon.png";
import pintester_icon from "../../Assets/pintester_icon.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="flex flex-col justify-center items-center gap-8 py-8 bg-[#f8f8f8]">
      {/* Logo and Brand Name */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <img src={footer_logo} alt="footer_logo" className="w-16 h-16" />
        <p className="text-[#383838] text-2xl md:text-4xl font-semibold">
          SHOPPER
        </p>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#252525] text-base md:text-lg">
        <li className="cursor-pointer hover:text-[#171717]">Company</li>
        <li className="cursor-pointer hover:text-[#171717]">Product</li>
        <li className="cursor-pointer hover:text-[#171717]">Offices</li>
        <li className="cursor-pointer hover:text-[#171717]">About</li>
        <li className="cursor-pointer hover:text-[#171717]">Contact</li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex gap-4">
        <div className="p-2 bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer hover:bg-[#e0e0e0]">
          <img src={insta_icon} alt="insta_icon" className="w-6 h-6" />
        </div>
        <div className="p-2 bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer hover:bg-[#e0e0e0]">
          <img src={pintester_icon} alt="pintester_icon" className="w-6 h-6" />
        </div>
        <div className="p-2 bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer hover:bg-[#e0e0e0]">
          <img src={whatsapp_icon} alt="whatsapp_icon" className="w-6 h-6" />
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center gap-4 w-full text-[#1a1a1a] text-sm md:text-base">
        <hr className="w-4/5 border-none rounded h-0.5 bg-[#c7c7c7]" />
        <p>Copyright &copy; {date.getFullYear()} - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
