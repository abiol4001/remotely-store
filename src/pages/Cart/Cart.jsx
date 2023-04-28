import React, { useState, } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate, } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [count, setCount] = useState(0);
  return (
    <div className="py-[31px] px-[24px] min-h-[600px] flex flex-col">
      <button onClick={handleGoBack}>
        <MdOutlineArrowBackIosNew size={22} />
      </button>
      <div className="flex justify-between items-center mt-5 mb-[25px]">
        <h4 className="text-[21px] font-[800]">Your Cart</h4>
        <p className="text-[#A6A798] text-[12px]">3 times</p>
      </div>

      {/* Cart item comp */}
      <div>
        <div className="bg-[#F3F3F5] h-[108px] w-[366px] flex items-center gap-3 px-[7px] rounded-md">
          <div className="bg-white h-[94px] w-[100px] rounded-md flex justify-center items-center">
            <img
              src="/markus-chair.png"
              alt="chair-image"
              className="h-[80px] w-[80px]"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="leading-5">Funiture Manila Adjustable Office Chair</p>
            <p className="text-[12px] text-[#BA5C3D]">USD 87.00</p>
            <div className="flex justify-between">
              <div className="flex gap-1">
                <button
                  className="border border-[#D1D2CD] rounded-full w-6 h-6 text-[#8A8B7A] flex justify-center items-center"
                  onClick={() => setCount((prevCount) => prevCount - 1)}
                >
                  -
                </button>
                <p className="text-[#A6A798]">{count}</p>
                <button
                  className="border border-[#D1D2CD] rounded-full w-6 h-6 text-[#8A8B7A] flex justify-center items-center"
                  onClick={() => setCount((prevCount) => prevCount + 1)}
                >
                  +
                </button>
              </div>
              <button className="text-[10px] rounded-3xl bg-white px-2 py-1">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between">
          <p>Total</p>
          <p className="text-[21px] text-[#BA5C3D]">$248.00</p>
        </div>

        <Link to="/checkout">
          <button className="bg-[#CED55B] h-[60px] rounded-md w-full mt-[39px]">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
