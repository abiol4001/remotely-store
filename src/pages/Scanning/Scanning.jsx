import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Scanning = () => {
  return (
    <div
      className="bg-gradient-to-br from-opacity-12 to-transparent h-[178px]"
      style={{
        background:
          "linear-gradient(129.83deg, rgba(4, 11, 20, 0.12) -21.54%, rgba(4, 11, 20, 0) 230.51%)",
      }}
    >
      <div className="flex justify-between items-center py-[20px] px-[24px]">
        <button
          className="h-[42px] w-[42px] rounded-md  bg-gradient-to-br from-opacity-12 to-transparent"
          style={{
            background:
              "linear-gradient(129.83deg, rgba(4, 11, 20, 0.12) -21.54%, rgba(4, 11, 20, 0) 230.51%)",
          }}
        >
          <MdOutlineArrowBackIosNew
            size={22}
            color="white"
            className="mx-auto"
          />
        </button>
        <p className="font-[800] text-white">Suggesting an Item</p>
        <div className="w-9"></div>
      </div>
    </div>
  );
}

export default Scanning