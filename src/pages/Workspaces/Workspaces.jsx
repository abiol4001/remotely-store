import React, { useState } from 'react'
import { MdKeyboardArrowRight, MdOutlineArrowBackIosNew } from 'react-icons/md';
import Filter from '../../components/Filter/Filter';
import { AiFillStar } from 'react-icons/ai';
import { Link, useNavigate, useParams, } from 'react-router-dom';

import youtubersData from '../../components/youtubers/youtubersData';
import workspacesData from '../../components/Workspaces/workspacesData';
import  { yourHistoryData } from '../../components/newArrivals/newArrivalsData';
import NewArrivals from '../../components/newArrivals/NewArrivals';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";



const Workspaces = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2.1,
    // slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.1,
    // slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.1,
    // slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.1,
    // slidesToSlide: 2,
  },
};


  const [isVisible, setIsVisible] = useState(false);

  const browseWorkspaces = ["Show all", "Developer", "Podcast creator", "Film making", "Photography" ]

  return (
    <div className="py-[31px] px-[24px] relative">
      <div className={`${isVisible ? "hidden" : "block"} w-full relative`}>
        <div className="flex justify-between items-center">
          <button onClick={handleGoBack}>
            <MdOutlineArrowBackIosNew size={22} />
          </button>
          <p>Explores Workspace</p>
          <div></div>
        </div>
        <div className="mt-[24px] mb-[20px] relative">
          <input
            type="text"
            placeholder="Search product name"
            className="border border-[#C9CEDA] rounded-[5px] h-[50px] w-[100%] px-3 outline-none"
          />
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-3 top-[30%]"
          >
            <img src="setting.svg" alt="filter-image" />
          </button>
        </div>

        <div className="bg-[#0A0B02] text-white h-[192px] rounded-[30px] py-[25px] px-[15px] flex flex-col justify-between relative">
          <p className="text-[12px] font-[800] text-[#C1C2B8] z-10">
            FEATURED WORKSPACE
          </p>
          <p className="text-[18px] font-[800] text-[#F4F5F7] w-[250px] z-10">
            Professional Gaming Assessories
          </p>
          <Link to="/workspaces/developer" className="z-10 w-[81px]">
            <span className="text-[#CED55B] text-[12px] flex items-center gap-1">
              View space
              <img src="arrow-right.svg" alt="" className="h-[12px] w-[12px]" />
            </span>
            <div className="h-[1px] w-full bg-[#CED55B] mt-[2px]"></div>
          </Link>

          <img
            src="speaker.png"
            alt="speaker-image"
            className="h-[192px] w-[240px] absolute right-0 top-0 "
          />
        </div>

        <div>
          <div className="flex items-center justify-between mt-[24px]">
            <h4 className="text-[18px] font-[800]">Browse workspaces</h4>
            <Link
              to=""
              className="flex items-center text-[#8A8B7A] text-[12px]"
            >
              View{" "}
              <span>
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
          <div
            className="flex items-center gap-3 overflow-x-scroll h-16"
            style={{ scrollBehavior: "smooth" }}
          >
            {browseWorkspaces.map((workspace) => (
              <button
                key={workspace}
                className={`py-[10px] px-[14px] bg-[#F4F5F7] rounded-3xl flex-shrink-0 text-[12px]`}
              >
                {workspace}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mt-[22px]">
            <h4 className="text-[18px] font-[800]">
              What <span className="text-[#BA5C3D]">YouTubers</span> search for{" "}
            </h4>
            <Link
              to=""
              className="flex items-center text-[#8A8B7A] text-[12px]"
            >
              View{" "}
              <span>
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>

          {/* Carousel  */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            className="flex gap-3 overflow-hidden mt-[20px]"
          >
            {youtubersData.map((item) => (
              <Link key={item.price}>
                <div className="w-[158px] h-[190px] px-[8px] py-[10px] rounded-md bg-[#F4F5F7] hover:scale-[102%] transition-all ease-in-out .5s">
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
                    <div className="text-[12px] flex justify-end items-center gap-1 text-[#8A8B7A]">
                      {item.rating} <AiFillStar color="#F2C94C" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>

        <div className="border border-[#DDDDDB] rounded-md h-[243px] mt-[32px] py-[16px] px-[20px] overflow-hidden">
          <p className="text-[12px] font-[800]">PEOPLE SEARCH FOR</p>
          <div
            className="overflow-y-scroll h-full pt-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {workspacesData.map((item) => (
              <Link
                to={`/workspaces/${item.user.toLowerCase()}`}
                key={item.price}
                className="h-[64px] w-full rounded-md mt-2 flex items-center gap-4 mb-4 hover:bg-gray-100 hover:p-2 transition-all ease-in-out"
              >
                <div className="w-[px] h-[px]">
                  <img
                    src={item.image}
                    alt="item-image"
                    className="w-[64px] h-[56px]"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-[16px] font-[800]">{item.user}</p>
                  <p className="text-[#A6A798] text-[12px]">{`${item.suggested} suggested items`}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-[32px]">
          <h4>Based on your browsing history</h4>
          <div className="flex flex-col gap-3 mt-[14px]">
            {yourHistoryData.map((item) => (
              <NewArrivals key={item.price} item={item} />
            ))}
          </div>
        </div>

        <Link to="/cart">
          <button className="bg-black rounded-full h-[60px] w-[60px] fixed bottom-10 right-10 md:right-[30%] lg:right-[40%] flex items-center justify-center">
            <img src="cart.svg" alt="" />
          </button>
        </Link>
      </div>

      {/* Filter pop-up  */}
      <div
        className={`${
          isVisible ? "block" : "hidden"
        } h-[822px] max-w-[414px] mx-auto`}
      >
        <Filter visibility={() => setIsVisible(!isVisible)} />
      </div>
    </div>
  );
}

export default Workspaces