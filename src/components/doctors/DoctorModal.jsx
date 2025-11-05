import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { doctorSchema } from "../../validation/doctorSchema.js";
import { addDoctor, updateDoctor } from "../../store/slices/doctorSlice.js";
import dayjs from "dayjs";

const DoctorModal = ({ isOpen, onClose, doctor }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: doctor?.name || "",
      specialty: doctor?.specialty || "",
      dob: doctor?.dob ? dayjs(doctor.dob).format("YYYY-MM-DD") : "",
      email: doctor?.email || "",
      contact: doctor?.contact || "",
      status: doctor?.status || "Active", 
    },
    enableReinitialize: true,
    validationSchema: doctorSchema,
    onSubmit: (values, { resetForm }) => {
      if (doctor?._id) {
        dispatch(updateDoctor({ id: doctor._id, data: values }));
      } else {
        dispatch(addDoctor(values));
      }
      resetForm(); //  clears all fields after submit
      onClose();
    },
  });

  useEffect(() => {
    if (!isOpen) {
      formik.resetForm();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 text-xs">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl">
        <h3 className="text-xl font-semibold mb-4 text-[#101828]">
          {doctor?._id ? "Edit Doctor" : "Add Doctor"}
        </h3>

        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-3">
          {/* Name */}
          <div>
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Name"
              className={`p-2 border rounded w-full ${formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-300"
                }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Specialty */}
          <div>
            <input
              name="specialty"
              value={formik.values.specialty}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Specialty"
              className={`p-2 border rounded w-full ${formik.touched.specialty && formik.errors.specialty
                  ? "border-red-500"
                  : "border-gray-300"
                }`}
            />
            {formik.touched.specialty && formik.errors.specialty && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.specialty}
              </p>
            )}
          </div>

          {/* DOB */}
          <div>
            <input
              type="date"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-2 border rounded w-full ${formik.touched.dob && formik.errors.dob
                  ? "border-red-500"
                  : "border-gray-300"
                }`}
            />
            {formik.touched.dob && formik.errors.dob && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.dob}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              className={`p-2 border rounded w-full ${formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
                }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <input
              name="contact"
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Contact"
              className={`p-2 border rounded w-full ${formik.touched.contact && formik.errors.contact
                  ? "border-red-500"
                  : "border-gray-300"
                }`}
            />
            {formik.touched.contact && formik.errors.contact && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.contact}
              </p>
            )}
          </div>


          <div>
            <label className="block mb-1 text-gray-700 text-xs">Status</label>
            <select
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`p-2 border rounded w-full ${formik.touched.status && formik.errors.status
                  ? "border-red-500"
                  : "border-gray-300"
                }`}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {formik.touched.status && formik.errors.status && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.status}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {doctor?._id ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorModal;
