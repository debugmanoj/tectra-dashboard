import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors, deleteDoctor } from "../../store/slices/doctorSlice.js";
import DataTable from "../common/DataTable.jsx";
import { manageDoctorsColumns } from "../../utils/columnConstants/Doctors/ManageDoctors.jsx";

const DoctorTable = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { list, loading, nextCursor } = useSelector((s) => s.doctors);

  //  Initial load with limit 5
  useEffect(() => {
    dispatch(fetchDoctors({ limit: 5 }));
  }, [dispatch]);

  //  Handle pagination load
  const handleLoadMore = () => {
    if (nextCursor) {
      dispatch(fetchDoctors({ limit: 5, cursor: nextCursor }));
    }
  };

  
  return (
    <div className="rounded p-4 bg-white border border-[#e9ebed] shadow-sm">
      <DataTable
        columns={manageDoctorsColumns}
        data={list}
        loading={loading}
        onEdit={onEdit}
        onDelete={(id) => dispatch(deleteDoctor(id))}
      />

      {/*  Load More Button for Pagination */}
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

export default DoctorTable;
