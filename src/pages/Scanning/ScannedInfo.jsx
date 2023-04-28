import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const ScannedInfo = () => {
  return (
    <div className="py-[20px] px-[24px]">
      <div className="flex justify-between items-center">
        <button className="">
          <MdOutlineArrowBackIosNew size={22} />
        </button>
        <p className="font-[800]">Scanned Item info</p>
        <div className="w-9"></div>
      </div>
      <div className="w-full mt-[41px] mb-[24px]">
        <img
          src="lamp.png"
          alt="lamp-image"
          className="h-[337px] w-[251px] mx-auto mb-[14px]"
        />
        <h4 className="text-[21px] font-[800]">Blush & Brass Desk Lamp</h4>
        <p className="flex items-center gap-1 text-[#4BB347]">
          Good for Developer <AiOutlineCheckCircle />
        </p>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-[#8A8B7A]">Description</p>
          <button className="text-[#F7906D] text-[12px]">Change</button>
        </div>
        <p>
          This LED desk lamp is a great addition to any workspace and ver
          essential for developers, thanks to its compact size and numerous
          lighting settings.
        </p>
      </div>
      <div className="mt-[32px] mb-[61px]">
        <p className="text-[#8A8B7A]">Add price range</p>
        <input
          type="range"
          name="price-range"
          id="price-range"
          className="w-full"
        />
        <div className="flex justify-between">
          <p>$10</p>
          <p>$2k</p>
        </div>
      </div>
      <button className="bg-[#CED55B] h-[60px] w-full rounded-lg">Suggest item</button>
    </div>
  );
}

export default ScannedInfo