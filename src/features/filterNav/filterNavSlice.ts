import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { getDataForDataSource, getDataTypeUnique } from '../../common/helpers/getDataForChart';
import { CHART_DATA } from '../../common/types/ChartDataTypes';

interface FilterNavState {
  campaignsForChar: string[];
  datasourceValue: string[];
  campaignsValue: string;
}

const initialState: FilterNavState = {
  campaignsForChar: [],
  datasourceValue: [],
  campaignsValue: ''
};

export const filterNavSlice = createSlice({
  name: 'filterNav',
  initialState,
  reducers: {
    SET_DATASOURCE: (state, action: PayloadAction<string[]>) => {
      state.datasourceValue = action.payload;
    },
    SET_CAMPAIGNS: (state, action: PayloadAction<string[]>) => {
      state.campaignsForChar = action.payload;
    },
    GET_CAMPAIGNS: (state, action: PayloadAction<string>) => {
      state.campaignsValue = action.payload;
    }
  }
});

const selectAllDataFromCSV = (state: RootState) => state.chartArea.data;
export const { SET_DATASOURCE, SET_CAMPAIGNS, GET_CAMPAIGNS } = filterNavSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectDatasources = (state: RootState) => state.filterNav.datasourceValue;
export const selectCampings = (state: RootState) => state.filterNav.campaignsValue;

const dataSources = createSelector([selectAllDataFromCSV], (data) =>
  getDataTypeUnique(data, CHART_DATA.DATASOURCE)
);
const campaigns = createSelector([selectAllDataFromCSV], (data) =>
  getDataTypeUnique(data, CHART_DATA.CAMPAIGNS)
);

const campaignsForDataSource = createSelector(
  [selectAllDataFromCSV, selectDatasources],
  (allData, datasources) =>
    getDataForDataSource(allData, CHART_DATA.DATASOURCE, datasources, CHART_DATA.CAMPAIGNS)
);

export const dataSourcesSelector = (state: RootState) => dataSources(state);
export const campaignsSelector = (state: RootState) => campaigns(state);
// export const dataForDatasourcesSelector = (state: RootState) => dataForDataSource(state);
export const campaignsForDatasourcesSelector = (state: RootState) => campaignsForDataSource(state);

export default filterNavSlice.reducer;
