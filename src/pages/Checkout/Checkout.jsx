import { useContext, useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const subTotal = localStorage.getItem("totalPrice")
  const totalPrice = Number(subTotal) + 50

  return (
    <div className="py-[31px] px-[24px]">
      <button onClick={handleGoBack}>
        <MdOutlineArrowBackIosNew size={22} />
      </button>

      <h4 className="text-[21px] font-[800] mt-5 mb-[25px]">Checkout</h4>
      <div>
        <p className="text-[#A6A798]  mb-3">PAYMENT</p>
        <Card />
      </div>

      {/* Delivery details */}
      <div>
        <p className="text-[#A6A798] mt-10  mb-3">SHIPPING INFORMATION</p>
        <img src="map.png" alt="map-image" className="h-[127px]" />
        <p className="text-[#A6A798] mt-3">Address</p>
        <p className="font-[500] text-[16px]">
          6391 Elgin St. Celina, Delaware 10299
        </p>
        <p className="text-[#A6A798] mt-3">Phone number</p>
        <p className="font-[500] text-[16px]">(480) 555-0103</p>
      </div>

      {/* Order Total */}
      <div className="mt-[100px]">
        <div className="flex justify-between items-center">
          <p className="text-[#A6A798]">Subtotal</p>
          <p className="text-[#8A8B7A]">${subTotal}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-[#A6A798]">Shipping cost</p>
          <p className="text-[#8A8B7A]">$50.00</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="">Total</p>
          <p className="text-[#BA5C3D] text-[21px] font-[700]">${totalPrice}</p>
        </div>
        <Link to="/order-confirmed" className="mt-[35px]">
          <button className="bg-[#CED55B] h-[60px] rounded-md w-full ">
            {`Checkout ${totalPrice}`}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;

export const Card = ( {card} ) => {
    return (
      <div
        className="border hover:border-[#8ADD4B] border-[#DDDDDB] h-[50px] w-full rounded-xl flex items-center justify-between p-[18px]"
        id="selectable-div"
      >
        <div className="flex gap-5 items-center ">
          <img src="visa.png" alt="visa-logo" className="h-3 w-9" />
          <p>Bank</p>
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#A6A798]"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-[#A6A798]"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-[#A6A798]"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-[#A6A798]"></div>
          </div>
          <p className="text-[#A6A798]">1234</p>
        </div>
        <input
          type="radio"
          name="option2"
          id="option2"
          className="h-[14px] w-[14px]"
        />
      </div>
    );
}
