import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

//Roles verisini API'den çekmek için thunk
export const getRoles = createAsyncThunk("client/getRoles", async () => {
  const res = await axiosInstance.get("/roles");
  // API response tipi kontrolü
  return Array.isArray(res.data) ? res.data : res.data.roles || [];
});

const initialState = {
  user: null,
  roles: [],
  loading: false,
  error: null
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.roles = action.payload;
        state.loading = false;
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.roles = [];
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setUser, clearUser } = clientSlice.actions;
export default clientSlice.reducer;