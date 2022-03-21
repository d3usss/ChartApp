import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { FilterNavComponent } from './components/filterNav/FilterNavComponent';
import { ChartAreaComponent } from './components/chartArea/ChartAreaComponent';
import { translations } from './common/translations/en';
import { useAppSelector } from './app/hooks';
import { fetchDataFromCSV, selectAllDataFromCSV } from './features/chartArea/chartAreaSlice';
import _ from 'lodash';
import { useDispatch } from 'react-redux';

const AppContainerStyled = styled.main`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 100%;
`;

const App: FC = (): JSX.Element => {
  const { chartAreaHeading, filterHeading } = translations;
  const chartData = useAppSelector(selectAllDataFromCSV);
  const dispatch = useDispatch();

  useEffect(() => {
    if (_.isEmpty(chartData)) {
      dispatch(fetchDataFromCSV());
    }
    return;
  }, []);

  return (
    <AppContainerStyled>
      <FilterNavComponent headingText={filterHeading} />
      <ChartAreaComponent headingText={chartAreaHeading} />
    </AppContainerStyled>
  );
};

export default App;
