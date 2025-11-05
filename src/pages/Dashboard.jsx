import React from "react";
import HeaderTitle from "../components/dashboard/HeaderTitle";
import StatsCard from "../components/dashboard/StatsCard";
import LineChartCard from "../components/dashboard/LineChartCard";
import ExpenseDonutChart from "../components/dashboard/ExpenseDonutChart";
import DoctorsOverview from "../components/dashboard/DoctorsOverview"
import { expenseData, sampleData } from "../utils/constants";



const Dashboard = () => {
  return (
    <div className=" space-y-2  min-h-screen font-poppins p-4">
      {/* Header */}
      <HeaderTitle main="Dashboard" />

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Total Visitors" value="42,946" growth="+36%" />
        <StatsCard title="Paid Visitors" value="7,929" growth="+26%" />
        <StatsCard title="Total Appointments" value="4,199" growth="+26%" />
        <StatsCard title="New Patients" value="1,647" growth="+26%" />
        
      </div>

      {/* Charts Section */}
      <div className="flex flex-col md:flex-row gap-6 py-1 ">
        <LineChartCard title="Cashflow" total="44,10,840" data={sampleData} />
        <ExpenseDonutChart title="Expenses" total="18,22,240" data={expenseData} />
       
      </div>
       <DoctorsOverview />
    </div>
  );
};

export default Dashboard;