import React from "react";
import { Link } from "react-router-dom";

const Done = () => {
  return (
    <div className="py-[31px] px-[24px] h-[896px] flex flex-col">
      <p className="text-center mt-24 text-[21px] font-[800] ">All done</p>
      <div
        className="h-[282px] max-w-[382px] min-w-[332px] mt-[144px] bg-cover bg-center mx-auto flex justify-center items-center"
        style={{ backgroundImage: `url(${"/order-confirmed.png"})` }}
      >
        <img src="box.png" alt="" className="h-[154px] w-[154px]" />
      </div>
      <Link to="/orders" className="mt-auto">
        <button className="bg-[#CED55B] h-[60px] rounded-md w-full ">
          Go to orders
        </button>
      </Link>
    </div>
  );
};

export default Done;
