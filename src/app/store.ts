import { configureStore } from '@reduxjs/toolkit';
import { gamesApi } from './services/games';
import searchReducer from './slices/search.slice';
import typeFilterReducer from './slices/typeFilter.slice';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    search: searchReducer,
    typeFilter: typeFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
