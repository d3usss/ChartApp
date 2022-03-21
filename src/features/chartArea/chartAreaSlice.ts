import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import Papa from 'papaparse';
import type { RootState } from '../../app/store';
import {
  getDataForCampaigns,
  getDataTypeAll,
  getDataTypeUnique
} from '../../common/helpers/getDataForChart';
import { CHART_DATA } from '../../common/types/ChartDataTypes';
import { selectCampings } from '../filterNav/filterNavSlice';

interface ChartAreaState {
  data: string[][];
}

const initialState: ChartAreaState = {
  data: []
};

export const fetchDataFromCSV = createAsyncThunk('chartArea/fetchDataFromCSV', () => {
  try {
    const response = fetch(
      'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv'
    )
      .then((response) => {
        return response.text();
      })
      .then((v) => {
        return Papa.parse(v);
      });

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
      .addCase(fetchDataFromCSV.fulfilled, (state: ChartAreaState, action: PayloadAction<any>) => {
        state.data = action.payload.data;
      })
      .addCase(fetchDataFromCSV.rejected, (state: ChartAreaState) => {
        state.data = [];
      });
  }
});

export const selectAllDataFromCSV = (state: RootState) => state.chartArea.data;

const dataForCampaigns = createSelector([selectAllDataFromCSV, selectCampings], (data, campaigns) =>
  getDataForCampaigns(data, campaigns)
);

const datesForAll = createSelector([selectAllDataFromCSV], (data) =>
  getDataTypeUnique(data, CHART_DATA.DATE)
);
const clicksAll = createSelector([selectAllDataFromCSV], (data) =>
  getDataTypeAll(data, CHART_DATA.CLICKS)
);
const impressionsAll = createSelector([selectAllDataFromCSV], (data) =>
  getDataTypeAll(data, CHART_DATA.IMPRESSIONS)
);

export const datesAllSelector = (state: RootState) => datesForAll(state);
export const clicksAllSelector = (state: RootState) => clicksAll(state);
export const impressionAllSelector = (state: RootState) => impressionsAll(state);
export const dataForCampaignsSelector = (state: RootState) => dataForCampaigns(state);

export default charAreaSlice.reducer;
