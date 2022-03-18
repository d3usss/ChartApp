import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Papa from 'papaparse';
import type { RootState } from '../../app/store';

interface ChartAreaState {
  data: string[][];
}

const initialState: ChartAreaState = {
  data: []
};

export const fetchDataFromCSV = createAsyncThunk('chartArea/fetchDataFromCSV', async () => {
  try {
    const response = await fetch(
      'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv'
    )
      .then((response) => response.text())
      .then((v) => Papa.parse(v));

    return response;
  } catch (error) {
    console.log('Error on fetch data from CSV', error); // TODO create Error Action
    return null;
  }
});

export const charAreaSlice = createSlice({
  name: 'chartArea',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // TODO change any for payload
      .addCase(fetchDataFromCSV.fulfilled, (state: ChartAreaState, action: PayloadAction<any>) => {
        state.data.push(action.payload.data);
      })
      .addCase(fetchDataFromCSV.rejected, (state: ChartAreaState) => {
        state.data = [];
      });
  }
});

// export const {} = charAreaSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.chartArea.data;

export default charAreaSlice.reducer;
