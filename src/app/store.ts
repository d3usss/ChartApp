import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import chartAreaReducer from '../features/chartArea/chartAreaSlice';
import filterNavReducer from '../features/filterNav/filterNavSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  chartArea: chartAreaReducer,
  filterNav: filterNavReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
