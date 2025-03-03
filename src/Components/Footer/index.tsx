import footer_logo from "../../Assets/logo_big.png";
import insta_icon from "../../Assets/instagram_icon.png";
import pintester_icon from "../../Assets/pintester_icon.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";
const Footer = () => {
  const date = new Date();

  return (
    <footer className="flex flex-col justify-center items-center gap-[50px]">
      <div className="flex items-center gap-[20px]">
        <img src={footer_logo} alt="footer_logo" />
        <p className="text-[#383838] text-[46px] font-semibold">SHOPPER</p>
      </div>
      <ul className=" flex gap-[50px] text-[#252525] text-xl">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer">
          <img src={insta_icon} alt="insta_icon" />
        </div>
        <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer">
          <img src={pintester_icon} alt="pintester_icon" />
        </div>
        <div className="p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer">
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-full mb-8 text-[#1a1a1a] text-xl">
        <hr className="w-[80%] border-none rounded-[10px] h-0.5 bg-[#c7c7c7]" />
        <p>Copyright &copy; {date.getFullYear()} - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
