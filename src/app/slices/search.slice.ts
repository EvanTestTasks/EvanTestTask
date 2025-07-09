import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type SearchState = {
  searchName: string;
};

const initialState: SearchState = {
  searchName: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchName: (state, action: PayloadAction<string>) => {
      state.searchName = action.payload;
    },
  },
});

export const { searchName } = searchSlice.actions;
export default searchSlice.reducer;
