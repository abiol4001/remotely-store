
import { Link } from 'react-router-dom';

const Onboard = () => {
  return (
    <div className="bg-[url('onboard.png')] bg-cover bg-center h-[896px] relative flex flex-col items-center justify-end px-[32px] py-[30px]">
      <div className="h-[238px] max-w-[414px] absolute bottom-0 left-0 backdrop-filter backdrop-blur-sm"></div>
      <div className="z-10">
        <p className="text-[#CED55B] text-[12px] font-[800]">WELCOME</p>
        <h3 className="text-[#FFFFFF] text-[42px] font-[800]">Remotely.io</h3>
        <p className="text-[#DDDDDB] text-[16px] font-[900]">
          We serve you with the best gadgets for your home workspace
        </p>
      </div>
      <button className="z-10 bg-[#CED55B] rounded-md h-[60px] w-[100%] mt-[27px] mb-[20px]">Browse Shop</button>
      <Link to="/login" className="text-white z-10">
        Login
      </Link>
    </div>
  );
}

export default Onboard