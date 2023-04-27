import React from 'react'
// components import
// import BrowsingHistory from '../../components/BrowsingHistory/BrowsingHistory';

// data import
import browsingHistoryData from '../../components/BrowsingHistory/browsingHistory';

// icons import
import { MdKeyboardArrowRight, MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import peopleSearch from '../../components/PeopleSearch/peopeSearch';
import NewArrivals from '../../components/newArrivals/NewArrivals';

const Search = () => {
  return (
    <div className="py-[31px] px-[24px]">
      <div className="flex justify-between items-center">
        <button>
          <MdOutlineArrowBackIosNew size={22} />
        </button>
        <p>Search</p>
        <div></div>
      </div>
      <div className="mt-[24px] mb-[20px]">
        <input
          type="text"
          placeholder="Search product name"
          className="border border-[#C9CEDA] rounded-[5px] h-[50px] w-[100%] px-3"
        />
      </div>
      <div className="mt-[20px]">
        <h4 className="text-[12px] text-[#A6A798] font-[900]">RECENT</h4>
      </div>

      <hr className="h-1 w-[60%] text-[#f4f5f7]" />

      <div>
        <div className="flex items-center justify-between mb-[12px]">
          <h4 className="text-[18px] font-[800]">Your browsing history</h4>
          <Link to="" className="flex items-center text-[#8A8B7A] text-[12px]">
            View{" "}
            <span>
              <MdKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div className="flex gap-3 overflow-hidden">
          {browsingHistoryData.map((item) => (
            <div
              key={item.price}
              className="w-[158px] h-[190px] px-[8px] py-[10px] rounded-md bg-[#F4F5F7]"
            >
              <div className="flex-shrink-0 h-">
                <img
                  src={item.image}
                  alt="item-image"
                  className="w-[120px] h-[90px] flex-shrink-0"
                />
              </div>
              <div className="h-[77px] w-[142px] bg-white rounded-lg p-2 overflow-hidden">
                <p className="text-[16px] whitespace-nowrap">{item.name}</p>
                <p className="text-[#BA5C3D] text-[12px] font-[900]">{`USD ${item.price}.00`}</p>
                <div className="text-[12px] flex justify-end items-center gap-1">
                  {item.rating} <AiFillStar color="#F2C94C" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-[32px]'>
        <h4 className="text-[21px] font-[800] mb-[14px]">
          What people are searching for
        </h4>
        <div>
            {peopleSearch.map(item => (
                <NewArrivals key={item.name} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search