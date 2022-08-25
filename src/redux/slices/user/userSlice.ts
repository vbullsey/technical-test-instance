import { RANDOM_USER_URL } from "@/constants";
import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";

import {
  initialInfo,
  InitialInfoType,
  initialResultUser,
  ResultsUserType,
} from "./userType";

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async ({ page = 1, results = 10 }: { page: number; results: number }) => {
    const response = await fetch(
      `${RANDOM_USER_URL}/api/?page=${page}&results=${results}`
    );
    return await response.json();
  }
);

// type DataInitialType = {
//   results: ResultsUserType;
//   info: InitialInfoType;
// };

const initialState = {
  isLoading: false,
  error: false,
  data: {
    results: [],
    info: initialInfo,
  },
};

export const userSlice: Slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.data = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      console.log("api call rejected");
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const userActions = {
  ...userSlice.actions,
};
