import _ from 'lodash';
import { CHART_DATA, DataSourcesType } from '../types/ChartDataTypes';

export const getDataTypeUnique = (dataForChart: string[][], type: CHART_DATA): string[] => {
  return !_.isEmpty(dataForChart)
    ? _.uniq(dataForChart.slice(1, -1).map((data) => data[type]))
    : [];
};

export const getDataTypeAll = (dataForChart: string[][], type: CHART_DATA): string[] => {
  return !_.isEmpty(dataForChart) ? dataForChart.slice(1, -1).map((data) => data[type]) : [];
};

export const getDataForDataSource = (
  dataFromCSV: string[][],
  getDataForType: CHART_DATA,
  formInputArr: string[],
  returnedType: CHART_DATA
): string[] => {
  if (_.isEmpty(dataFromCSV) && _.isEmpty(formInputArr)) return [];
  const filteredData = _.flatten(
    formInputArr.map((input: string) =>
      dataFromCSV.slice(1, -1).filter((allData: string[]) => allData[getDataForType] === input)
    )
  );

  return _.uniq(filteredData.map((data) => data[returnedType]));
};

// export const SumCampaigns = () => {};
