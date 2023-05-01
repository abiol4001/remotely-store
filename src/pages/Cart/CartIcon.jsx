
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartIcon = () => {

    const { state } = useContext(CartContext);
    let totalItems = state.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

  return (

      <Link to="/cart" className='z-20'>
        <button className="bg-black rounded-full h-[60px] w-[60px] fixed bottom-10 right-10 md:right-[30%] lg:right-[40%] flex items-center justify-center hover:opacity-60 hover:scale-105 transition-all ease-out duration-300">
          <img src="/cart.svg" alt="" />
          {totalItems > 0 &&<div className='text-black text-[11px] flex justify-center items-center h-4 w-4 rounded-full bg-white  font-[600] absolute top-3 right-4'>{totalItems}</div>}
        </button>

      </Link>

  );
}

export default CartIcon