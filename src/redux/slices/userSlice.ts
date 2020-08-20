import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { UserData } from "src/types";

const name = "user";

export const fetchUserById = createAsyncThunk(
  `${name}/fetchById`,
  async (userId: number) => {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
    );
    return data;
  }
);

// State

export interface UserState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  data?: UserData;
  ad?: {
    company: string;
    url: string;
    text: string;
  };
}

const initialState: UserState = {
  loading: "idle",
};

const userSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.ad = action.payload.ad;
      state.data = action.payload.data;
      state.loading = "succeeded";
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});

export const { actions, reducer } = userSlice;
export default reducer;
