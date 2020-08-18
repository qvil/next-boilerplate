import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultLanguage } from "src/lib/i18n";
import { SetSettingType, LanguageType } from "src/types";

// State
export interface SettingState {
  language: LanguageType;
}
const initialState: SettingState = {
  language: defaultLanguage,
};

const settingSlice = createSlice({
  name: "setting",
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
