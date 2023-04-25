import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[896px] px-[24px] py-[25px] flex flex-col justify-end">
      <div>
        <p className="font-[800] text-[#8A8B7A]">HI FELLA 👋🏻</p>
        <h3 className="font-[800]">Welcome Back</h3>
      </div>
      <div className="flex flex-col mt-[45px]">
        <button className="border border-[#8A8B7A] rounded-md h-[60px] mb-[20px] flex items-center gap-8 px-[32px]">
          <span>
            <FcGoogle size={28} />
          </span>{" "}
          <p className="text-[16px]">Login with Google</p>
        </button>
        <button className="border border-[#8A8B7A] rounded-md h-[60px] flex items-center gap-8 px-[32px]">
          <span>
            <FaFacebook size={28} color="#4267B2" />
          </span>
          <p>Login with Facebook</p>
        </button>
      </div>
      <p className="text-[#C1C2B8] text-center my-[29px]">OR</p>
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
            className="outline-none bg-[#F6F6F5] rounded-md h-[56px] px-2 mt-[8px]"
          />
        </div>
        <div className="flex flex-col mt-[25px]">
          <label htmlFor="password" className="text-[12px]">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="outline-none bg-[#F6F6F5] rounded-md h-[56px] px-2 mt-[8px]"
          />
        </div>
        <button className="bg-[#CED55B] h-[60px] w-full rounded-md mt-[42px]">
          Login
        </button>
      </form>
      <div className="flex justify-between mt-[76px]">
        <Link to="" className="text-[#8A8B7A] text-[16px]">
          Forgot password?
        </Link>
        <Link to="/register" className="text-[#BA5C3D]">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
