// icon import
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
// component import
import RelatedItem from "../../components/relatedItems/RelatedItem";

// data import
import workspacesData from "../../components/Workspaces/workspacesData";
import relatedItems from "../../components/relatedItems/relatedItems";
import { Link, useNavigate, useParams } from "react-router-dom";
import { allItemsData } from "../../components/youtubers/youtubersData";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartIcon from "../Cart/CartIcon";

const ViewItem = () => {

  const context = useContext(CartContext)
  console.log(context)

  const {dispatch, state} = context

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { productName } = useParams()

  const product = allItemsData.find(
    (item) => item.name.split(" ").join("-").toLowerCase() === productName
  );


  const { name, price, rating, seller, image, id } = product

  const handleAdd = () => {
    product.quantity = 1
    dispatch({type: "ADD_TO_CART", payload: product})
  }

  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const productInCart = state.find((product) => product.name === name);

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [state, isInCart]);
  

  return (
    <div className="pb-4">
      <div className="bg-[#F4F5F7] h-[451px] py-[22px] px-[24px] relative">
        <div className="flex justify-between items-center">
          <button onClick={handleGoBack}>
            <MdOutlineArrowBackIosNew size={22} />
          </button>
          <button>
            <img src="/open.svg" alt="open-icon" />
          </button>
        </div>
        <div className="relative w-[100%] h-[100%]">
          <img
            src={`/${image[0]}`}
            alt=""
            className="h-[308px] max-w-[40%] absolute left-[25%] object-contain"
          />
          <div className="absolute right-2 top-[90px] flex flex-col gap-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-md bg-[#ECEDDE] h-[57px] w-[60px] flex justify-center items-center border-4 border-white"
              >
                <img
                  key={index}
                  src={`/${image[index]}`}
                  alt={`image${index + 1}`}
                  className="h-[52px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 right-[0px] absolute bottom-[0%]">
          <button
            onClick={handleAdd}
            className="bg-gray-200 h-[60px] w-[415px] rounded-md hover:bg-slate-500 hover:text-gray-200 transition-all duration-300"
          >
            {isInCart ? "Added to cart" : "Add to cart"}
          </button>
          {/* <button className="bg-gray-100 p-4 rounded-full">
            <CiHeart size={25} />
          </button> */}
        </div>
      </div>

      <div className="px-[18px] py-[18px] relative">
        {/* <div className="flex items-center justify-between gap-6 absolute top-[10%]">
          <button onClick={handleAdd} className="bg-[#CED55B] h-[60px] w-[289px] rounded-md">
            {isInCart ?  "Added to cart" : "Add to cart"}
          </button>
          <button className="bg-gray-100 p-4 rounded-full">
            <CiHeart size={25} />
          </button>
        </div> */}
        <div className="flex gap-3 items-center justify-between mt-3">
          <div>
            <h4 className="text-[21px] font-[800]">{name}</h4>
            <div className="flex gap-1 items-center mt-2">
              <p className="text-[#A6A798] text-[12px]">{seller}</p>
              <div className="h-1 w-1 bg-[#A6A798] rounded-full"></div>
              <p className="text-[#1B3D2F] text-[12px]">{rating}</p>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} color="#F2C94C" />
                ))}
              </div>
            </div>
          </div>
          <div className="h-[78px] px-2 flex-shrink-0 flex flex-col items-center justify-center bg-[#F5FAF8]">
            <p className="font-[800] text-[21px] text-[#1B3D2F]">${price}</p>
            <p className="font-[500] text-[12px] text-[#1B3D2F]">7% off</p>
          </div>
        </div>

        <p className="mt-[24px] mb-[32px] text-[#040B14]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quod
          sequi vitae deserunt minus enim impedit corporis excepturi et sit
          ratione, debitis dolorum reprehenderit aspernatur, quo, recusandae
          perferendis dolore dignissimos.
        </p>

        <div>
          <h5 className="text-[12px] text-[#040B14] font-[800] mb-[16px]">
            WORKSPACES ITEM CAN BE USED
          </h5>
          <div className="flex overflow-x-scroll  gap-4">
            {workspacesData.map((item) => (
              <Link
                to={`/workspaces/${item.user.toLowerCase()}`}
                key={item.user}
                className="bg-[#F4F5F7] w-[219px] h-[81px] rounded-md flex items-center pl-3 gap-3 flex-shrink-0 "
              >
                <div className="w-[68px] h-[65px]">
                  <img
                    src={`/${item.image}`}
                    alt="item-image"
                    className="w-[68px] h-[65px]"
                  />
                </div>
                <div className="place-self-start mt-2">
                  <p className="text-[16px] font-[800]">{item.user}</p>
                  <p className="text-[#A6A798] text-[12px]">{`${item.suggested} suggested items`}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-[24px]">
          <h5 className="text-[12px] text-[#040B14] font-[800] mb-[16px]">
            RELATED ITEMS
          </h5>
          <div className="flex gap-3 overflow-hidden">
            {relatedItems.map((item) => (
              <RelatedItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
      <CartIcon />
    </div>
  );
};

export default ViewItem;
