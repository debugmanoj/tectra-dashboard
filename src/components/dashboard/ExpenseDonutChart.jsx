import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const ExpenseDonutChart = ({ title, total, data }) => {
  const COLORS = ["#6D95FF", "#E6E6E6", "#F8C4B4"];

  return (
    <div className="bg-white border border-[#e9ebed] rounded-xl p-7 shadow-sm w-[320px]">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[#101828] font-semibold">{title}</h3>
        <select className="border border-[#e9ebed] text-xs rounded-md px-2 py-1 text-[#475467] bg-white">
          <option>Last 12 Months</option>
        </select>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: 180, height: 180 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-sm text-[#475467]">Total</p>
            <h2 className="text-md font-semibold text-[#101828]">₹ {total}</h2>
          </div>
        </div>

        <div className="flex gap-6 mt-4 text-sm text-[#475467]">
          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-xs">
              <span
                className="w-3 h-3 rounded-full mb-1 text-xs"
                style={{ backgroundColor: COLORS[i] }}
              ></span>
              <p>{item.name}</p>
              <p className="font-medium text-[#101828]">₹ {item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseDonutChart;