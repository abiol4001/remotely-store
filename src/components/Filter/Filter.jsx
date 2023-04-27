/* eslint-disable react/prop-types */
// import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const Filter = ({ visibility }) => {

    const productType = [
      "Laptops",
      "Tables",
      "Keyboard",
      "Headset",
      "Earbuds",
      "Chairs",
    ];
    const brand = [
      "Apple",
      "Longitech",
      "Blue Gallery Home",
      "Sensibo",
      "Orca Deco Office",
      "Dell",
    ];


  return (
    <div className='mx-auto'>
      <div className="flex justify-between mb-[21px]">
        <h4 className="text-[21px] font-[800]">Filter by</h4>
        <button onClick={visibility}>
          <AiOutlineClose />
        </button>
      </div>
      <div>
        <label htmlFor="price-range" className="text-[#8A8B7A] text-[16px]">
          Price
        </label>
        <input
          type="range"
          name="price-range"
          id="price-range"
          className="w-full"
        />
        <div className='flex justify-between'>
            <p className='text-[12px]'>10$</p>
            <p className='text-[12px]'>2000$</p>
        </div>
        {/* <Slider className="slider" value={values} min={MIN} max={MAX} onChange={setValues} /> */}
      </div>

      <div>
        <p className="text-[#8A8B7A] text-[16px] mt-[24px] mb-[12px]">
          Product type
        </p>
        <div>
          {productType.map((type) => (
            <div
              key={type}
              className={`flex justify-between items-center ${
                type === productType.length ? "" : "mb-[20px]"
              }`}
            >
              <label htmlFor={type}>{type}</label>
              <input
                type="checkbox"
                name={type}
                id={type}
                className="h-[18px] w-[18px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[#8A8B7A] text-[16px] mt-[24px] mb-[12px]">Brand</p>
        <div>
          {brand.map((type) => (
            <div
              key={type}
              className={`flex justify-between items-center ${
                type === brand.length ? "" : "mb-[20px]"
              }`}
            >
              <label htmlFor={type}>{type}</label>
              <input
                type="checkbox"
                name={type}
                id={type}
                className="h-[18px] w-[18px] text-orange-600"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-[20px]">
        <button className="h-[42px] w-[150px] rounded-md bg-[#F4F5F7]">
          Cancel
        </button>
        <button className="h-[42px] w-[150px] rounded-md bg-[#CED55B]">
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filter