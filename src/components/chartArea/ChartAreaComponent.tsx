import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { LineChartComponent } from '../../common/sharedComponents/lineChart/LineChartComponent';
import {
  clicksAllSelector,
  datesAllSelector,
  impressionAllSelector
} from '../../features/chartArea/chartAreaSlice';
import { Row } from '../../style/theme/layout.css';

type ChartAreaComponentProps = {
  headingText: string;
};

const ChartAreaContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  height: 100vh;
  width: 100%;
  padding: 1rem;
`;

export const ChartAreaComponent: FC<ChartAreaComponentProps> = ({
  headingText
}: ChartAreaComponentProps): JSX.Element => {
  const datesAll = useAppSelector(datesAllSelector);
  const clicksAll = useAppSelector(clicksAllSelector);
  const impressionAll = useAppSelector(impressionAllSelector);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false
        }
      }
    }
  };

  const labels = datesAll;

  const data = {
    labels,
    datasets: [
      {
        label: 'Clicks',
        data: clicksAll.map((val: string) => val),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y'
      },
      {
        label: 'Impressions',
        data: impressionAll.map((val: string) => val),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1'
      }
    ]
  };

  return (
    <ChartAreaContainerStyled>
      <Row>
        <h1>{headingText}</h1>
      </Row>
      <Row>
        <LineChartComponent options={options} data={data} />
      </Row>
    </ChartAreaContainerStyled>
  );
};
