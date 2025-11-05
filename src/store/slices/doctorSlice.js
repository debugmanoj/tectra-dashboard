import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import doctorService from "../../services/doctorService";
import { showError, showSuccess } from "../../utils/toastUtils";

// Fetch
export const fetchDoctors = createAsyncThunk(
  "doctors/fetchAll",
  async (params = {}, { rejectWithValue }) => {
    try {
      const res = await doctorService.getAllDoctors(params);
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch doctors");
    }
  }
);

// Create
export const addDoctor = createAsyncThunk("doctors/add", async (payload, { rejectWithValue }) => {
  try {
    const data = await doctorService.createDoctor(payload);
    showSuccess("Doctor added successfully!");
    return data;
  } catch (err) {
    showError("Failed to add doctor");
    return rejectWithValue(err.response?.data || "Failed to create doctor");
  }
});

// Update
export const updateDoctor = createAsyncThunk("doctors/update", async ({ id, data }, { rejectWithValue }) => {
  try {
    const updated = await doctorService.updateDoctor(id, data);
    showSuccess("Doctor updated successfully!");
    return updated;
  } catch (err) {
    showError("Failed to update doctor");
    return rejectWithValue(err.response?.data || "Failed to update doctor");
  }
});

// Delete
export const deleteDoctor = createAsyncThunk("doctors/delete", async (id, { rejectWithValue }) => {
  try {
    await doctorService.deleteDoctor(id);
    showSuccess("Doctor deleted successfully!");
    return id;
  } catch (err) {
    showError("Failed to delete doctor");
    return rejectWithValue(err.response?.data || "Failed to delete doctor");
  }
});

const initialState = {
  list: [],
  loading: false,
  error: null,
  isModalOpen: false,
  editingDoctor: null,
}

const doctorSlice = createSlice({
  name: "doctors",
  initialState: initialState,
  reducers: {
    // 🎯 Modal control reducers
    openDoctorModal: (state, action) => {
      state.isModalOpen = true;
      state.editingDoctor = action.payload || null;
    },
    closeDoctorModal: (state) => {
      state.isModalOpen = false;
      state.editingDoctor = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;

        const { items, nextCursor } = action.payload;

        // If cursor exists, append new results
        if (action.meta.arg.cursor) {
          state.list = [...state.list, ...items];
        } else {
          // If no cursor, replace list (fresh load)
          state.list = items;
        }

        state.nextCursor = nextCursor;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addDoctor.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(updateDoctor.fulfilled, (state, action) => {
        const index = state.list.findIndex((d) => d._id === action.payload._id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.list = state.list.filter((d) => d._id !== action.payload);
      })

  },
});
export const { openDoctorModal, closeDoctorModal } = doctorSlice.actions;

export default doctorSlice.reducer;
