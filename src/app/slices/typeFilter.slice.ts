import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type TypeFilterState = {
  gameType: string;
};

const initialState: TypeFilterState = {
  gameType: 'ALL',
};

const typeFilterSlice = createSlice({
  name: 'typeFilter',
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<string>) => {
      state.gameType = action.payload;
    },
  },
});

export const { setSelectedType } = typeFilterSlice.actions;
export default typeFilterSlice.reducer;
