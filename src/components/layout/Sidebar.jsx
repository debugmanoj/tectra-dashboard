import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFileInvoiceDollar,
  FaCalendarAlt,
  FaComments,
  FaHeartbeat,
  FaTeeth,
  FaShieldAlt,
} from "react-icons/fa";

import { MdOutlineDashboard } from "react-icons/md";
import { TbDental } from "react-icons/tb";
import { PiPill } from "react-icons/pi";
import { BsBox } from "react-icons/bs";
import { CiStethoscope } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";

const Sidebar = () => {
  const linkBase =
    "flex items-center gap-3 px-3 py-2 text-[15px] rounded-md transition-all duration-200";

  //  Sidebar Configuration
  const sidebarSections = [
    {
      title: "OVERVIEW",
      items: [
        { name: "Dashboard", path: "/", icon: <
          MdOutlineDashboard  

        /> },
        { name: "Dental Dashboard", path: "/dental-dashboard", icon: <TbDental 

           /> },
      ],
    },
    {
      title: "Applications",
      items: [
        { name: "Telemedicine", path: "/telemedicine", icon: <PiPill /> },
        { name: "Inventory Management", path: "/inventory", icon: <BsBox /> },
        { name: "Insurance Management", path: "/insurance", icon: <FaShieldAlt   /> },
        { name: "Doctors", path: "/doctors", icon: <CiStethoscope /> },
        { name: "Patients", path: "/patients", icon: <LuUsers /> },
        { name: "Appointments", path: "/appointments", icon: <FaCalendarAlt /> },
        { name: "Chats", path: "/chats", icon: <FaComments /> },
        { name: "Medical Services", path: "/medical-services", icon: <FaHeartbeat /> },
        { name: "Dental Services", path: "/dental-services", icon: <FaTeeth /> },
        { name: "Billing and Invoice", path: "/billing", icon: <FaFileInvoiceDollar /> },
      ],
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#f9fbfb] border-r border-[#e9ebed] text-[#344054]">
      {/* Logo Section */}
      <div className="p-4 border-b-2 border-[#e6e8eb] flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">Tectra Clinic</h1>
      </div>

      {/* Sidebar Sections */}
      {sidebarSections.map((section) => (
        <div key={section.title} className="mt-5 px-4 text-xs">
          <p className="text-[88%]  text-[#98A2B3] mb-2 uppercase ">
            {section.title}
          </p>

          <nav className="flex flex-col gap-1">
            {section.items.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? "bg-[#e5f4f8] text-black font-semibold"
                      : "hover:bg-[#e5f4f8]"
                  }`
                }
              >
                <span className="text-black">{item.icon}</span>
                <span className="text-xs">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
