import { Link } from "react-router-dom";

const Register = () => {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
    <div className="w-full bg-[#fce3fe] mt-[89px] py-20">
      <div className="w-[580px] h-full bg-white m-auto py-10 px-[60px]">
        <h2 className="my-5 text-[35px] text-[#171717] font-semibold    ">
          Sign Up
        </h2>
        <div className="flex justify-center items-center flex-col gap-7 mt-7">
          <input
            className="h-20 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-20 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="h-20 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
            type="password"
            placeholder="Your Password"
          />
        </div>
        <button className="w-full h-20 text-white bg-[#ff4141] my-7 border-none text-2xl cursor-pointer font-medium">
          Continue
        </button>
        <p className="text-[#5c5c5c] text-lg font-medium">
          Already have an account?{" "}
          <Link onClick={scrollToTop} to={"/login"}>
            <span className="font-semibold text-[#ff4141] cursor-pointer">
              Login here
            </span>
          </Link>
        </p>
        <div className="flex items-center justify-center cursor-pointer gap-2 mt-5 text-[#c9c9c9] text-sm font-medium">
          <input type="checkbox" name="check" id="check" />
          <label htmlFor="check">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
