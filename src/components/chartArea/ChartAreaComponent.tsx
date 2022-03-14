import React, { FC } from 'react';
import styled from 'styled-components';

type ChartAreaComponentProps = {
  headingText: string;
};

const ChartAreaContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  height: 100vh;
  width: 100%;
`;

export const ChartAreaComponent: FC<ChartAreaComponentProps> = ({
  headingText
}: ChartAreaComponentProps): JSX.Element => {
  return (
    <ChartAreaContainerStyled>
      <h1>{headingText}</h1>
    </ChartAreaContainerStyled>
  );
};
