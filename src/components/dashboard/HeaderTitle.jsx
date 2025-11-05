import React from "react";

const HeaderTitle = ({ main, sub }) => {
  return (
    <div className="mb-[1%]">
      <h2 className="text-xl font-semibold text-[#101828] font-poppins">{main}</h2>
      <p className="text-[#475467] text-sm mt-1 font-poppins">{sub}</p>
    </div>
  );
};

export default HeaderTitle;