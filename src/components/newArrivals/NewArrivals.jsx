import React from 'react'
import { AiFillStar } from "react-icons/ai";


const NewArrivals = ( {item} ) => {
  return (
    <div className="border border-[#DDDDDB] rounded-md flex h-[110px] p-[12px] gap-3">
      <div className="bg-[#F4F5F7] w-[100px] h-[86px] flex flex-shrink-0 items-center justify-center">
        <img src={item.image} alt="item-image" className='h-[70%] object-fill'  />
      </div>
      <div>
        <p className="text-[#040B14] font[500] text-[16px] leading-5">{item.name}</p>
        <div className="flex items-center gap-2">
          <p className="text-[#A6A798] text-[12px]">{item.seller}</p>
          <div className="h-1 w-1 bg-[#A6A798] rounded-full"></div>
          <p className="text-[#DDDDDB] text-[12px]">{item.rating}</p>
          <AiFillStar color="#F2C94C" />
        </div>
        <p className="text-[#BA5C3D] text-[16px] font-[900]">{`$${item.price}`}</p>
      </div>
    </div>
  );
}

export default NewArrivals