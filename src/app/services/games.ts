import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GameData } from './types';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://belparyaj.com/pragmatic',
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query<GameData, void>({
      query: () => '/game/list?partner_name=belparyaj',
    }),
  }),
});

export const { useGetAllGamesQuery } = gamesApi;
