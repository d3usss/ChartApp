import React, { FC } from 'react';
import styled from 'styled-components';

type FilterNavComponentProps = {
  headingText: string;
};

const FilterNavContainerStyled = styled.nav`
  display: flex;
  justify-content: center;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  min-width: 400px;
  height: 100vh;
  background-color: aliceblue;
`;

export const FilterNavComponent: FC<FilterNavComponentProps> = ({
  headingText
}: FilterNavComponentProps): JSX.Element => {
  return (
    <FilterNavContainerStyled>
      <h1>{headingText}</h1>
    </FilterNavContainerStyled>
  );
};
