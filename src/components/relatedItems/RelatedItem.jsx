/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";

const RelatedItem = ( {item} ) => {
  return (
    <div className="w-[188px] h-[202px] p-[12px] border border-[#DDDDDB] rounded-md">
      <div className="bg-[#F4F5F7] w-[164px] h-[86px] flex justify-center items-center rounded-md">
        <img src={item.image} alt="item-image" className="h-[60px] w-[60px]" />
      </div>
      <p className="mt-[16px]">{item.name}</p>
      <div className="flex items-center gap-2 mt-[4px] mb-[8px]">
        <p className="text-[#A6A798] text-[12px]">{item.seller}</p>
        <div className="h-1 w-1 bg-[#A6A798] rounded-full"></div>
        <p className="text-[#DDDDDB] text-[12px]">{item.rating}</p>
        <AiFillStar color="#F2C94C" />
      </div>
      <p className="text-[#BA5C3D] text-[16px] font-[900]">{`$${item.price}.00`}</p>
    </div>
  );
}

export default RelatedItem