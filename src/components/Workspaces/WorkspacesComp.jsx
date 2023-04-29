/* eslint-disable react/prop-types */
import React from 'react'

const WorkspacesComp = ( {item} ) => {
  return (
    <div className="bg-[#F4F5F7] h-[178px] w-[136px] rounded-lg p-3 ">
      <div className="w-[110px] h-[104px]">
        <img
          src={item.image}
          alt="item-image"
          className="w-[110px] h-[104px]"
        />
      </div>
      <div className='text-center mt-2'>
        <p className="text-[16px] font-[800]">{item.user}</p>
        <p className="text-[#A6A798] text-[12px]">{`${item.suggested} suggested items`}</p>
      </div>
    </div>
  );
}

export default WorkspacesComp