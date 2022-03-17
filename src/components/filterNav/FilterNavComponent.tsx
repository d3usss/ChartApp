import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonComponent } from '../../common/sharedComponents/button/ButtonComponent';
import { MultiSelectFromComponent } from '../../common/sharedComponents/multiSelectForm/MultiSelectFromComponent';
import { SelectFromComponent } from '../../common/sharedComponents/selectForm/SelectFormComponent';
import { translations } from '../../common/translations/en';
import { Row } from '../../style/theme/layout.css';

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
      <Row>
        <h1>{headingText}</h1>
      </Row>
      <Row>
        <MultiSelectFromComponent
          labelText={filterLabelDataSource}
          onChange={onSelectDatasource}
          options={MockMultiselectValues}
        />
        <ButtonComponent
          sx={{ alignSelf: 'flex-end', marginLeft: '1rem' }}
          buttonText={filterButton}
          isPrimary
        />
      </Row>
      <Row>
        <SelectFromComponent labelText={filterLabelCampaign} selectFormValues={MockSelectValues} />
      </Row>
    </FilterNavContainerStyled>
  );
};
