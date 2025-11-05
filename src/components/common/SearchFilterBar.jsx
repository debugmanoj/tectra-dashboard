import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchFilterBar = ({searchFilter = false, specialityFilter = false, monthFilter = false}) => {
  return (
    <div className="flex items-center gap-3">
      {searchFilter && <div className="relative">
        <FiSearch className="absolute left-2 top-2.5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-8 pr-3 py-2 border border-[#e9ebed] rounded-md text-xs text-[#475467] focus:outline-none"
        />
      </div>}

      {specialityFilter && <select className="border border-[#e9ebed] rounded-md px-3 py-2  text-[#475467] bg-white text-xs">
        <option>Heart Surgeon</option>
        <option>Dentist</option>
      </select>}

      {monthFilter && <select className="border border-[#e9ebed] rounded-md px-3 py-2  text-[#475467] bg-white text-xs">
        <option>Last 12 Months</option>
        <option>Last 6 Months</option>
      </select>}

    </div>
  );
};

export default SearchFilterBar;
