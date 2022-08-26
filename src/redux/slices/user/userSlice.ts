import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";

export const fetchUser: any = createAsyncThunk(
  "users/fetchUser",
  async ({ page = 1, results = 10 }: { page: number; results: number }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RANDOM_USER_URL}/api/?seed=${process.env.NEXT_PUBLIC_SEED}&page=${page}&results=${results}`
    );
    return await response.json();
  }
);

const initialState = {
  isLoading: false,
  error: false,
  data: null,
  page: 1,
  results: 10,
};

export const userSlice: Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
      state.data = initialState.data;
    });
  },
});

export const userActions = {
  ...userSlice.actions,
};
