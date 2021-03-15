import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LanguageType } from "src/types";

const name = "setting";

// Types
export interface SettingState {
  language: LanguageType;
}

export type SetSettingType = { key: string; value: any };

const initialState: SettingState = {
  language: "ko-KR",
};

const settingSlice = createSlice({
  name,
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<SetSettingType>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    toggleSetting: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      state[key] = !state[key];
    },
  },
});

export const { actions, reducer } = settingSlice;
export const { setSetting, toggleSetting } = actions;
export default reducer;
