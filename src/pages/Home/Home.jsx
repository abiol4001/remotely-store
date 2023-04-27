// component import
import NewArrivals from "../../components/newArrivals/NewArrivals";
import WorkspacesComp from "../../components/Workspaces/WorkspacesComp";

// data import
import newArrivalsData from "../../components/newArrivals/newArrivalsData";
import workspacesData from "../../components/Workspaces/workspacesData";

// icons import
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className=" px-[24px] py-[32px] flex flex-col relative">
      <div className="flex items-center justify-between mb-[32px]">
        <div className="h-[42px] w-[42px]">
          <img src="profile.png" alt="profile-picture" />
        </div>
        <div>
          <Link to="/search">
            <button className="border border-gray-400 p-2 rounded-[50%] mr-2">
              <img
                src="search.svg"
                alt="serach-icon"
                className="w-[20px] h-[20px]"
              />
            </button>
          </Link>
          <button className="border border-gray-400 p-2 rounded-[50%]">
            <img
              src="wishlist.svg"
              alt="wishlist-icon"
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
      </div>
      <h4 className="text-[21px] font-[800] mb-5">Popular now</h4>
      <div className="bg-[#0A0B02] text-white h-[192px] rounded-[30px] py-[25px] px-[15px] flex flex-col justify-between relative">
        <p className="text-[21px] font-[800] w-[200px]">
          Adjustment Office Chair
        </p>
        <div className="flex items-center">
          <p className="text-[#A6A798] text-[12px]">Hughlan Workspaces</p>
          <div className="h-1 w-1 bg-[#A6A798] rounded-full"></div>
          <p className="text-[#DDDDDB] text-[12px]">4.8</p>
          <AiFillStar color="#F2C94C" />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#CED55B] rounded-md h-[42px] w-[100px]">
            View Item
          </button>
          <button className="bg-white rounded-full p-2">
            <img src="bag.svg" alt="" className="z-10" />
          </button>
        </div>
        <img
          src="chair.png"
          alt="chair-image"
          className="h-[246px] w-[129px] absolute right-5 -top-10"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h4 className="text-[21px] font-[800]">Workspaces</h4>
          <Link to="" className="flex items-center text-[#8A8B7A] text-[12px]">
            See more{" "}
            <span>
              <MdKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div className=" mt-5 flex gap-2 overflow-hidden">
          {workspacesData.map((item) => (
            <WorkspacesComp key={item.suggested} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h4 className="text-[21px] font-[800]">New arrivals</h4>
          <Link to="" className="flex items-center text-[#8A8B7A] text-[12px]">
            See more{" "}
            <span>
              <MdKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div className="mt-4 h-[240px] overflow-hidden flex flex-col gap-3">
          {newArrivalsData.map((item) => (
            <NewArrivals key={item.name} item={item} />
          ))}
        </div>
      </div>
      <button className="bg-black rounded-full h-[60px] w-[60px] fixed bottom-5 right-5 flex items-center justify-center">
        <img src="cart.svg" alt="" />
      </button>
    </div>
  );
};

export default Home;
