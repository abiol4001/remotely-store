/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';


const NewArrivals = ( {item} ) => {
  return (
    <Link to={`/${item.name.split(" ")[0].toLowerCase()}`} className="border border-[#DDDDDB] rounded-md flex h-[110px] p-[12px] gap-3 hover:scale-[1.05] transition-all duration-100 ease-linear">
      <div className="bg-[#F4F5F7] w-[100px] h-[86px] flex flex-shrink-0 items-center justify-center">
        <img src={`/${item.image[0]}`} alt="item-image" className='h-[70%] object-fill'  />
      </div>
      <div className=''>
        <p className="text-[#040B14] font[500] text-[16px] leading-5 mb-2">{item.name}</p>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-[#A6A798] text-[12px]">{item.seller}</p>
          <div className="h-1 w-1 bg-[#A6A798] rounded-full"></div>
          <p className="text-[#DDDDDB] text-[12px]">{item.rating}</p>
          <AiFillStar color="#F2C94C" />
        </div>
        <p className="text-[#BA5C3D] text-[16px] font-[900]">{`$${item.price}.00`}</p>
      </div>
    </Link>
  );
}

export default NewArrivals