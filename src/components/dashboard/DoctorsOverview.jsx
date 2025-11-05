import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors, deleteDoctor } from "../../store/slices/doctorSlice.js";
import DataTable from "../common/DataTable.jsx";
import SearchFilterBar from "../common/SearchFilterBar.jsx";
import { dashboardColumns } from "../../utils/columnConstants/dashboard/DashboardColumn.jsx";

const DoctorsOverview = () => {
  const dispatch = useDispatch();
  const { list, loading, nextCursor } = useSelector((state) => state.doctors);

  useEffect(() => {
    // Load initial data
    dispatch(fetchDoctors({ limit: 5 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (nextCursor) {
      dispatch(fetchDoctors({ limit: 5, cursor: nextCursor }));
    }
  };

  
  return (
    <div className="bg-white border border-[#e9ebed] rounded-xl p-4 mt-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#101828] font-semibold text-lg">Doctors Overview</h3>
        <SearchFilterBar searchFilter={true} specialityFilter={true} monthFilter={true} />
      </div>

      <DataTable
        columns={dashboardColumns}
        data={list}
        loading={loading}
        selectable
        onDelete={(id) => dispatch(deleteDoctor(id))}
      />
      {/* Load more button */}
      {nextCursor && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2  bg-white text-black rounded hover:bg-[#e5f4f8] hover:text-black text-xs"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorsOverview;
