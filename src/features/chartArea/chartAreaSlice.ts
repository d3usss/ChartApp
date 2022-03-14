import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface ChartAreaState {
  data: any; // TODO: change any for data type
}

const initialState: ChartAreaState = {
  data: 0
};

export const charAreaSlice = createSlice({
  name: 'charArea',
  initialState,
  reducers: {}
});

// export const {} = charAreaSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.charArea.data;

export default charAreaSlice.reducer;
