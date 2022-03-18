import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { FilterNavComponent } from './components/filterNav/FilterNavComponent';
import { ChartAreaComponent } from './components/chartArea/ChartAreaComponent';
import { translations } from './common/translations/en';
import { useAppDispatch } from './app/hooks';
import { fetchDataFromCSV } from './features/chartArea/chartAreaSlice';

const AppContainerStyled = styled.main`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 100%;
`;

const App: FC = (): JSX.Element => {
  const { chartAreaHeading, filterHeading } = translations;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataFromCSV());
    console.log('test');
  }, []);

  return (
    <AppContainerStyled>
      <FilterNavComponent headingText={filterHeading} />
      <ChartAreaComponent headingText={chartAreaHeading} />
    </AppContainerStyled>
  );
};

export default App;
