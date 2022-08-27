import { createSlice, Slice } from "@reduxjs/toolkit";

type SidebarType = {
  isOpen: boolean;
};

const initialState: SidebarType = {
  isOpen: true,
};

export const sidebarSlice: Slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    handleSidebar: (state: SidebarType, action) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: {},
});

export const sidebarActions = {
  ...sidebarSlice.actions,
};
