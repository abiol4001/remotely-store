import { useContext} from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate, } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext)


  const handleGoBack = () => {
    navigate(-1);
  };

  let totalItems = state.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const total = state.reduce((total, item) => {
    const num = Number(item.price)
    localStorage.setItem(
      "totalPrice",
      (total + num * item.quantity)
    );
    return (total + (num * item.quantity));
  },0)

  return (
    <div className="py-[31px] px-[24px] h-[850px] overflow-y-scroll flex flex-col relative">
      <div className="flex justify-between items-center">
        <button onClick={handleGoBack}>
          <MdOutlineArrowBackIosNew size={22} />
        </button>
        <div className="flex gap-2">
          <Link to="/home">Home</Link>
          <Link to="/orders">Orders</Link>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 mb-[25px]">
        <h4 className="text-[21px] font-[800]">Your Cart</h4>
        <p className="text-[#A6A798] text-[12px]">{totalItems} items</p>
      </div>

      {/* Cart item comp */}

      <div className="absolute top-[50%] left-[15%]">
        {state.length < 1 && (
          <div>
            <p className="text-4xl text-gray-400">Your cart is empty!</p>
          </div>
        )}
      </div>
      <div className="transition-all duration-500 ease-out">
        {state.map((item) => (
          <div
            key={item.id}
            className="bg-[#F3F3F5] h-[108px] w-[366px] flex items-center gap-3 px-[7px] rounded-md mb-3 transition-all duration-150 ease-in-out"
          >
            <div className="bg-white h-[94px] w-[100px] rounded-md flex justify-center items-center">
              <img
                src={`${item.image[0]}`}
                alt={item.name}
                className="h-[80px] w-[80px]"
              />
            </div>
            <div className="flex flex-col gap-[6px] w-[60%]">
              <p className="leading-5">{item.name}</p>
              <p className="text-[12px] text-[#BA5C3D]">
                USD {`${(item.price * item.quantity).toFixed(2)}`}
              </p>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <button
                    className="border border-[#D1D2CD] rounded-full w-6 h-6 text-[#8A8B7A] flex justify-center items-center"
                    onClick={() =>
                      item.quantity < 2
                        ? dispatch({ type: "REMOVE_FROM_CART", payload: item })
                        : dispatch({ type: "DECREASE", payload: item })
                    }
                  >
                    -
                  </button>
                  <p className="text-[#A6A798]">{item.quantity}</p>
                  <button
                    className="border border-[#D1D2CD] rounded-full w-6 h-6 text-[#8A8B7A] flex justify-center items-center"
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                  className="text-[10px] rounded-3xl bg-white px-2 py-1"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        {state.length > 0 && (
          <div className="flex justify-between">
            <p>Total</p>
            <p className="text-[21px] text-[#BA5C3D]">{total.toFixed(2)}</p>
          </div>
        )}

        <Link to="/checkout" className="">
          <button
            disabled={state.length < 1}
            className="mt-10 bg-[#CED55B] h-[60px] rounded-md w-full disabled:cursor-not-allowed disabled:bg-gray-300 transition-all ease-out duration-500"
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
