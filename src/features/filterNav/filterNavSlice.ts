import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface FilterNavState {
  data: any; // TODO: change any for data type
}

const initialState: FilterNavState = {
  data: 0
};

export const filterNavSlice = createSlice({
  name: 'filterNav',
  initialState,
  reducers: {}
});

// export const {} = filterNavSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.filterNav.data;

export default filterNavSlice.reducer;
