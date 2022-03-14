import React, { FC } from 'react';
import styled from 'styled-components';
import { SelectFromComponent } from '../../common/sharedComponents/selectForm/SelectFormComponent';
import { translations } from '../../common/translations/en';

type FilterNavComponentProps = {
  headingText: string;
};

const FilterNavContainerStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  min-width: 400px;
  height: 100vh;
  background-color: aliceblue;
  padding: 1rem;
`;

const MockSelectValues = ['All', 'Google', 'Facebook'];

export const FilterNavComponent: FC<FilterNavComponentProps> = ({
  headingText
}: FilterNavComponentProps): JSX.Element => {
  const { filterLabelCampaign } = translations;

  return (
    <FilterNavContainerStyled>
      <h1>{headingText}</h1>
      <SelectFromComponent labelText={filterLabelCampaign} selectFormValues={MockSelectValues} />
    </FilterNavContainerStyled>
  );
};
