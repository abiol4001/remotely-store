import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Orders = () => {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-[822px] py-[31px] px-[24px]">
      <div className={`${isVisible ? "hidden" : "block"}`}>
        <div className="flex justify-between items-center">
          <button onClick={handleGoBack}>
            <MdOutlineArrowBackIosNew size={22} />
          </button>
          <p className="font-[800]">Your Orders</p>
          <div></div>
        </div>
        <div className="mt-[24px] mb-[20px] relative">
          <input
            type="text"
            placeholder="Search product name"
            className="border border-[#C9CEDA] rounded-[5px] h-[50px] w-[100%] px-3 outline-none"
          />
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-3 top-[30%]"
          >
            <img src="setting.svg" alt="" />
          </button>
        </div>

        {/* List of orders */}
        <div>
          <div className="py-2 px-3 bg-gray-200 rounded-md">
            <div className="flex mb-3 gap-3">
              <div className="rounded-md bg-white h-[104px] w-[98px] flex-shrink-0 flex justify-center items-center">
                <img src="beat-airpods.png" alt="" />
              </div>
              <div className="flex flex-col">
                <p className="ml-auto text-[12px] text-[#BA5C3D]"> #09567</p>
                <p className=" text-[12px]">Delivered September 30</p>
                <p>Apple Airpods Pro 2nd Gen with Wireless Charging</p>
              </div>
            </div>
            <button className="h-[42px] border border-black rounded-lg w-full">
              View Item
            </button>
          </div>
        </div>

        <Link to="/cart">
          <button className="bg-black rounded-full h-[60px] w-[60px] fixed bottom-10 right-10 md:right-[30%] lg:right-[40%] flex items-center justify-center hover:bg-gray-800">
            <img src="cart.svg" alt="" />
          </button>
        </Link>
      </div>

      {/* Filter pop-up */}
      <div className={`${isVisible ? "block" : "hidden"}`}></div>
    </div>
  );
};

export default Orders;
