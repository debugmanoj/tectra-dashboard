import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const LineChartCard = ({ title, total, data }) => {
  return (
    <div className="bg-white border border-[#e9ebed] rounded-xl p-4 flex-1 shadow-sm ">
      <div className="flex justify-between items-center mb-[2%]">
        <div>
          <h3 className="text-[#101828] font-semibold mb-[10%]">{title}</h3>

        </div>
        <select className="border border-[#e9ebed] text-xs rounded-md px-2 py-1 text-[#475467] bg-white">
          <option>Last 12 Months</option>
        </select>
      </div>
      <div className="text-sm text-black mb-[2%]">Total <span className="font-medium  text-xl ml-[1%] "> {total}</span></div>


      <div className="h-[76%] " >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#475467" }}
              //  axisLine={false}
              // tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#475467" }}
              // axisLine={false}
              // tickLine={false}
            />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#0078a9" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartCard;