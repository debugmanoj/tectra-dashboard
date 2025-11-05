import React from "react";
import { FaSearch, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOutLight } from "react-icons/pi";
import SearchFilterBar from "../common/SearchFilterBar";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-[#f9fbfb] border-b border-[#e9ebed] px-6 py-3">
      {/* Search Bar */}
      <div className="relative w-64">
         <SearchFilterBar searchFilter={true}/>
        
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Icon Buttons */}
        <div className="flex items-center gap-3">
          {[IoIosNotificationsOutline, IoSettingsOutline, PiSignOutLight].map((Icon, idx) => (
            <button
              key={idx}
              className="w-9 h-9 flex items-center justify-center border border-[#e9ebed] rounded-full bg-white hover:bg-[#f3f4f6] transition"
            >
              <Icon className="text-gray-900 text-[15px]" />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-[#e9ebed]" />

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/90.jpg" 
            alt="User"
            className="w-9 h-9 rounded-full border border-[#e9ebed]"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-medium text-[#101828]">Dhanush</span>
            <span className="text-[55%] font-extralight  flex items-center gap-1">
               Online<span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
