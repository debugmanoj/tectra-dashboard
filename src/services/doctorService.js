import axiosInstance from "../api/axiosClient";

const doctorService = {
getAllDoctors: async (params) => {
    const res = await axiosInstance.get("/doctors", { params });
    return res.data.data; // { items, nextCursor }
  },
  async createDoctor(payload) {
    const { data } = await axiosInstance.post("/doctors", payload);
    return data.data;
  },

  async updateDoctor(id, payload) {
    const { data } = await axiosInstance.put(`/doctors/${id}`, payload);
    return data.data;
  },

  async deleteDoctor(id) {
    const { data } = await axiosInstance.delete(`/doctors/${id}`);
    return data;
  },
};

export default doctorService;