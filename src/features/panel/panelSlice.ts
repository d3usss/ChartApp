import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface PanelState {
  data: any; // TODO: change any for data type
}

const initialState: PanelState = {
  data: 0
};

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {}
});

// export const {} = panelSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.panel.data;

export default panelSlice.reducer;
