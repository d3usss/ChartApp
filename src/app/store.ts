import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import chartAreaReducer from '../features/chartArea/chartAreaSlice';
import filterNavReducer from '../features/filterNav/filterNavSlice';

export const store = configureStore({
  reducer: {
    chartArea: chartAreaReducer,
    filterNav: filterNavReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
