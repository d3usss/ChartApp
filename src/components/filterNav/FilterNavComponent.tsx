import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonComponent } from '../../common/sharedComponents/button/ButtonComponent';
import { MultiSelectFromComponent } from '../../common/sharedComponents/multiSelectForm/MultiSelectFromComponent';
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

const Row = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
`;

const MockSelectValues = ['All', 'Google', 'Facebook'];
const MockMultiselectValues = [
  'metrics',
  'doubleclicks',
  'metrics2',
  'doubleclicks2',
  'metrics3',
  'doubleclicks3'
];

export const FilterNavComponent: FC<FilterNavComponentProps> = ({
  headingText
}: FilterNavComponentProps): JSX.Element => {
  const { filterLabelCampaign, filterLabelDataSource, filterButton } = translations;

  const onSelectDatasource = (selectedItem: string[]): void => {
    console.log(selectedItem);
  };

  return (
    <FilterNavContainerStyled>
      <h1>{headingText}</h1>
      <Row>
        <MultiSelectFromComponent
          labelText={filterLabelDataSource}
          onChange={onSelectDatasource}
          options={MockMultiselectValues}
        />
        <ButtonComponent
          sx={{ margin: '2.5rem 1.5rem' }}
          buttonText={filterButton}
          isDisabled={false} // TODO move to state
        />
      </Row>
      <Row>
        <SelectFromComponent labelText={filterLabelCampaign} selectFormValues={MockSelectValues} />
      </Row>
    </FilterNavContainerStyled>
  );
};
