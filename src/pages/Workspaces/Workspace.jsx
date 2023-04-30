import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Filter from "../../components/Filter/Filter";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { allItemsData, developerItemsData } from "../../components/youtubers/youtubersData";
import SearchComp from "../../components/Search/SearchComp";
import workspacesData from "../../components/Workspaces/workspacesData";
import CartIcon from "../Cart/CartIcon";

const Workspace = () => {

  const { name } = useParams()

  const actualWorkspace = workspacesData.find(workspace => workspace.user.toLowerCase() === name)
  const {user, suggested} = actualWorkspace


  const [isVisible, setIsVisible] = useState(false);

  const [query, setQuery] = useState('')

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="py-[31px] px-[24px]">
      <div className={`${isVisible ? "hidden" : "block"} w-full relative`}>
        <button onClick={handleGoBack}>
          <MdOutlineArrowBackIosNew size={22} />
        </button>
        <div className="flex justify-between items-start mt-5">
          <div>
            <h4 className="text-[21px] font-[800]">{user} Workspace</h4>
            <p className="text-[12px] text-[#8A8B7A]">
              {suggested} suggested items
            </p>
          </div>
          <button className="bg-[#F7ECE8] text-[#BA5C3D] h-[31px] w-[84px] rounded-2xl text-[12px]">
            suggest +
          </button>
        </div>
        <div className="mt-[24px] mb-[20px] relative">
          <input
            type="text"
            placeholder="Search product name"
            onChange={(e) => setQuery(e.target.value)}
            className="border border-[#C9CEDA] rounded-[5px] h-[50px] w-[100%] px-3 outline-none"
          />
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-3 top-[30%]"
          >
            <img src="/setting.svg" alt="filter-image" />
          </button>
        </div>
        {/* <SearchComp isVisible={isVisible} setIsVisible={setIsVisible} /> */}
        <div>
          <h4 className="text-[12px] font-[800] text-[#8A8B7A]">
            SUGGESTED ITEMS
          </h4>
          <div className="mt-[14px] flex justify-between flex-wrap gap-y-7 overflow-hidden">
            {allItemsData
              .filter((data) => user.toLowerCase() === data.category)
              .filter((result) => result.name.toLowerCase().includes(query))
              .map((item) => (
                <Link
                  to={`/${item.name.split(" ").join("-").toLowerCase()}`}
                  key={item.price}
                  className="flex flex-col items-center max-w-[171px] h-[190px] px-[8px] py-[6px] rounded-lg bg-[#F4F5F7] hover:scale-[102%] transition-all ease-in-out .5s"
                >
                  <div className="flex-shrink-0 h-">
                    <img
                      src={`/${item.image[0]}`}
                      alt="item-image"
                      className="max-w-[110px] h-[90px] flex-shrink-0"
                    />
                  </div>
                  <div className="h-[97px] w-[150px] bg-white rounded-lg p-2 overflow-hidden">
                    <p className="text-[14px]">{item.name}</p>
                    <p className="text-[#BA5C3D] text-[12px] font-[900]">{`USD ${item.price}.00`}</p>
                    <div className="text-[12px] flex justify-end items-center gap-1 text-[#8A8B7A]">
                      {item.rating} <AiFillStar color="#F2C94C" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <CartIcon />
      </div>

      {/* Filter pop-up  */}
      <div
        className={`${
          isVisible ? "block" : "hidden"
        } h-[822px] max-w-[414px] mx-auto `}
      >
        <Filter visibility={() => setIsVisible(!isVisible)} />
      </div>
    </div>
  );
};

export default Workspace;
