import React, { lazy, Suspense } from "react";
import DoctorTable from "../components/doctors/DoctorTable.jsx";

const DoctorModal = lazy(() => import("../components/doctors/DoctorModal.jsx"));
import { openDoctorModal, closeDoctorModal } from "../store/slices/doctorSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/common/Loader.jsx";
import HeaderTitle from "../components/dashboard/HeaderTitle.jsx";

const Doctors = () => {
  const dispatch = useDispatch()

  const { isModalOpen, editingDoctor } = useSelector((state) => state.doctors);

  return (

    <div className="p-4">
      <div className="flex items-center justify-between mb-4  ">
        <HeaderTitle main="Manage Doctors"/>
      
        <div>
          <button onClick={() => dispatch(openDoctorModal(null))} className="px-4 py-2 text-xs bg-white rounded">
            Add Doctor
          </button>
        </div>
      </div>
      <div className="bg-white border border-[#e9ebed] rounded-full  ">
        <DoctorTable onEdit={(d) => dispatch(openDoctorModal(d))} />
      </div>
      <Suspense fallback={<Loader message="Loading Modal Box"/>}>
        <DoctorModal
          isOpen={isModalOpen}
          onClose={() => dispatch(closeDoctorModal())}
          doctor={editingDoctor}
        />
      </Suspense>
    </div>

  );
};

export default Doctors;
