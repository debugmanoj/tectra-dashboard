import React from "react";


const StatsCard = ({ title, value, growth }) => {
  return (
    <div className="bg-white border border-[#e9ebed] rounded-xl p-3 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h4 className="text-sm  font-bold tracking-wide mt-[1%] mb-[2%]">{title}</h4>
        <span className="text-gray-400 text-xs cursor-pointer">•••</span>
      </div>
      <div className="flex items-center justify-between">
        <div className=" text-2xl font-semibold text-[#101828] mt-[08%] font-poppins">
           {value}
           <span className="text-[#12B76A] text-xs font-medium ml-[6%]">{growth}</span>
        </div>
        <div>
        </div>
      </div>


    </div>
  );
};

export default StatsCard;