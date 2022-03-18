import _ from 'lodash';
import { CHART_DATA } from '../types/ChartDataTypes';

export const getDataTypeUnique = (dataForChart: string[][], type: CHART_DATA): string[] => {
  console.log(dataForChart[0]);
  return !_.isEmpty(dataForChart)
    ? _.uniq(dataForChart[0].slice(1, -1).map((data) => data[type]))
    : [];
};

export const getDataTypeAll = (dataForChart: string[][], type: CHART_DATA): string[] => {
  return !_.isEmpty(dataForChart) ? dataForChart[0].slice(1, -1).map((data) => data[type]) : [];
};
