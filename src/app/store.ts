import { configureStore } from '@reduxjs/toolkit';
import chartAreaReducer from '../features/chartArea/chartAreaSlice';
import filterNavReducer from '../features/filterNav/filterNavSlice';

export const store = configureStore({
  reducer: {
    chartArea: chartAreaReducer,
    filterNav: filterNavReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
