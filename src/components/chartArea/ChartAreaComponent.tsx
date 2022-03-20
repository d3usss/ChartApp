import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { LineChartComponent } from '../../common/sharedComponents/lineChart/LineChartComponent';
import {
  clicksAllSelector,
  dataForCampaignsSelector,
  datesAllSelector,
  impressionAllSelector
} from '../../features/chartArea/chartAreaSlice';
import { selectCampings, selectDatasources } from '../../features/filterNav/filterNavSlice';
import { Row } from '../../style/theme/layout.css';
import { translations } from '../../common/translations/en';
import { dataForChart, optionsForChart } from '../../common/helpers/dataForCharts';
import _ from 'lodash';

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
  const getCampaingName = useAppSelector(selectCampings);
  const getDatasources = useAppSelector(selectDatasources);
  const dataForCampaing = useAppSelector(dataForCampaignsSelector);
  const { chartAreaPlaceholder } = translations;
  const campaingText = getCampaingName && getDatasources.length ? getCampaingName : '';
  const isAllCampaing = getCampaingName === 'All';
  const shouldShowChart = (!_.isEmpty(getDatasources) && getCampaingName.length) || isAllCampaing;

  const data = dataForChart(isAllCampaing, dataForCampaing, clicksAll, datesAll, impressionAll);

  return (
    <ChartAreaContainerStyled>
      <Row>
        <h1>{`${headingText} ${campaingText}`}</h1>
      </Row>
      <Row>
        {shouldShowChart ? (
          <LineChartComponent options={optionsForChart} data={data} />
        ) : (
          <p>{chartAreaPlaceholder}</p>
        )}
      </Row>
    </ChartAreaContainerStyled>
  );
};
