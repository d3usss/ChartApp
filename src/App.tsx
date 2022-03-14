import React, { FC } from 'react';
import styled from 'styled-components';
import { FilterNavComponent } from './components/filterNav/FilterNavComponent';
import { ChartAreaComponent } from './components/chartArea/ChartAreaComponent';
import { translations } from './common/translations/en';

const AppContainerStyled = styled.main`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 100%;
`;

const App: FC = (): JSX.Element => {
  const { chartAreaHeading, filterHeading } = translations;
  return (
    <AppContainerStyled>
      <FilterNavComponent headingText={filterHeading} />
      <ChartAreaComponent headingText={chartAreaHeading} />
    </AppContainerStyled>
  );
};

export default App;
