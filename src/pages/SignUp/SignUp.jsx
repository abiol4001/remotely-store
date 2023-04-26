import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[896px] px-[24px] py-[25px] flex flex-col justify-end">
      <div>
        <p className="font-[800] text-[#8A8B7A]">HI FELLA 👋🏻</p>
        <h3 className="font-[800] text-[21px]">
          Welcome to <span className="text-[#CED55B]">Remotely.io</span>
        </h3>
      </div>

      <div className="flex flex-col mt-[45px]">
        <button className="border border-[#8A8B7A] rounded-md h-[60px] mb-[20px] flex items-center gap-9 px-[32px]">
          <span>
            <FcGoogle size={28} />
          </span>{" "}
          <p className="text-[16px]">Login with Google</p>
        </button>
        <button className="border border-[#8A8B7A] rounded-md h-[60px] flex items-center gap-7 px-[32px]">
          <span>
            <FaFacebook size={28} color="#4267B2" />
          </span>
          <p>Login with Facebook</p>
        </button>
      </div>
      <p className="text-[#C1C2B8] font-[500] text-center my-[29px]">OR</p>
      <form>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[12px]">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Eg. jamesburnes@gmail.com"
            className="outline-none bg-[#F6F6F5] rounded-md h-[56px] px-3 mt-[8px]"
          />
        </div>

        <div className="flex flex-col mt-[25px]">
          <label htmlFor="email" className="text-[12px]">
            Phone number
          </label>
          <div className="flex w-[100%] items-center">
            <select
              name="code"
              id="code"
              className="bg-[#F6F6F5] h-[58px] text-gray-400 mr-2 rounded-md px-1 mt-[8px] flex-shrink-0"
            >
              <option value="+233">+233</option>
            </select>
            <input
              type="number"
              name="number"
              id="number"
              className="outline-none bg-[#F6F6F5] rounded-md h-[56px] px-3 mt-[8px] flex-grow"
            />
          </div>
        </div>

        <div className="flex flex-col mt-[25px]">
          <label htmlFor="password" className="text-[12px]">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="outline-none bg-[#F6F6F5] rounded-md h-[56px] px-3 mt-[8px]"
          />
        </div>
        <button className="bg-[#CED55B] h-[60px] w-full rounded-md mt-[42px]">
          Sign Up
        </button>
      </form>
      <div className="flex justify-between mt-[76px]">
        <Link to="" className="text-[#8A8B7A] text-[16px]">
          Don’t have an account?
        </Link>
        <Link to="/register" className="text-[#BA5C3D]">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
