import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface AdvertisingDataState {
  data: any; // TODO: change any for data type
}

const initialState: AdvertisingDataState = {
  data: 0
};

export const advertisingDataSlice = createSlice({
  name: 'advertisingData',
  initialState,
  reducers: {}
});

// export const {} = advertisingDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.advertisingData.data;

export default advertisingDataSlice.reducer;
