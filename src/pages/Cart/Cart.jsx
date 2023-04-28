import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Cart = () => {
  return (
    <div className="py-[31px] px-[24px]">
      <button>
        <MdOutlineArrowBackIosNew size={22} />
      </button>
      <div className="flex justify-between items-start mt-5">
        <div>
          <h4 className="text-[21px] font-[800]">Developer Workspace</h4>
          <p className="text-[12px] text-[#8A8B7A]">16 suggested items</p>
        </div>
        <button className="bg-[#F7ECE8] text-[#BA5C3D] h-[31px] w-[84px] rounded-2xl text-[12px]">
          suggest +
        </button>
      </div>
    </div>
  );
}

export default Cart