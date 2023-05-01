import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";

const Orders = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState('')

  const navigate = useNavigate();
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

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
          <Link to="/home">Home</Link>
        </div>
        <div className="mt-[24px] mb-[20px] relative">
          <input
            type="text"
            placeholder="Search product name"
            onChange={(e) => setQuery(e.target.value)}
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
        <div className="flex flex-col gap-3">
          {existingOrders
            .filter((item) => item.name.toLowerCase().includes(query))
            .map((item) => (
              <div key={item.id}>
                <div className="py-2 px-3 bg-gray-200 rounded-md">
                  <div className="flex mb-3 gap-3">
                    <div className="rounded-md bg-white h-[104px] w-[98px] flex-shrink-0 flex justify-center items-center">
                      <img src={`/${item.image[0]}`} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <p className="ml-auto text-[12px] text-[#BA5C3D]">{`#${item.id}`}</p>
                      <p className=" text-[12px]">Delivered September 30</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <button className="h-[42px] border border-black rounded-lg w-full">
                    View Item
                  </button>
                </div>
              </div>
            ))}
        </div>

        <CartIcon />
      </div>

      {/* Filter pop-up */}
      <div className={`${isVisible ? "block" : "hidden"}`}></div>
    </div>
  );
};

export default Orders;
