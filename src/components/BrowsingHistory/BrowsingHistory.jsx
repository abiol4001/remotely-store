/* eslint-disable react/prop-types */

import { AiFillStar } from 'react-icons/ai';

const BrowsingHistory = ( { item } ) => {
  return (
    <div className="w-[158px] h-[190px] rounded-md">
      <div>
        <img src={`/${item.image[0]}`} alt="item-image" />
      </div>
      <div className="h-[77px] w-[142px]">
        <p>{item.name}</p>
        {/* <p className="text-[#BA5C3D] text-[12px] font-[900]">{`USD ${item.price}.00`}</p> */}
        <div>
          {item.rating} <AiFillStar color="#F2C94C" />
        </div>
      </div>
    </div>
  );
}

export default BrowsingHistory;