import React, { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

export type ChartProps = {
  options: any;
  data: any; // TODO change any
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartStyled = styled(Line)`
  width: fit-content;
`;

export const LineChartComponent: FC<ChartProps> = ({ options, data }: ChartProps): JSX.Element => {
  return <LineChartStyled options={options} data={data} />;
};
