import React, { useState } from 'react'
import newArrivalsData from '../newArrivals/newArrivalsData';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const SearchComp = ({ isVisible, setIsVisible, dataToSearch}) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchHistory([...searchHistory, query]);
      setQuery("");
    }
  };

  const [searchHistory, setSearchHistory] = useState([
    "Phone Tripod-Stand",
    "Fitness watch",
    "USB microphone recording",
  ]);

//   const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="mt-[24px] mb-[20px] relative">
        <input
          type="text"
          placeholder="Search product name"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-[#C9CEDA] rounded-[5px] h-[50px] w-[100%] pl-3 pr-9 outline-none"
        />
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-[30%]"
        >
          <img src="/setting.svg" alt="" />
        </button>
      </div>
      <ul className={`${query.length > 2 ? "visible" : "hidden"}`}>
        {dataToSearch && (
          dataToSearch.filter((item) => item.name.toLowerCase().includes(query))
          .map((result) => (
            <li key={result.price}>
              <Link>{result.name}</Link>
            </li>
          )))}

        <div className="mt-[20px]">
          <h4 className="text-[12px] text-[#A6A798] font-[900]">RECENT</h4>
          <ul className="h-[150px] w-[100%] pt-2">
            {searchHistory.map((search) => (
              <div
                key={search}
                className="flex items-center justify-between mb-2"
              >
                <li>{search}</li>
                <button>
                  <AiOutlineClose color="#C1C2B8" />
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-[100%] flex justify-center items-center mb-[30px]">
          <hr className="h-1 w-[60%] text-[#f4f5f7]" />
        </div>
      </ul>
    </div>
  );
};

// SearchComp.defaultProps = {
//   searchHistory: "",
//   setSearchHistory: []
// };

export default SearchComp