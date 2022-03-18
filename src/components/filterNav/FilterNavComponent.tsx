import React, { FC } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { ButtonComponent } from '../../common/sharedComponents/button/ButtonComponent';
import { MultiSelectFromComponent } from '../../common/sharedComponents/multiSelectForm/MultiSelectFromComponent';
import { SelectFromComponent } from '../../common/sharedComponents/selectForm/SelectFormComponent';
import { translations } from '../../common/translations/en';
import { Row } from '../../style/theme/layout.css';
import { getDataTypeUnique } from '../../common/helpers/getDataForChart';

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

export const FilterNavComponent: FC<FilterNavComponentProps> = ({
  headingText
}: FilterNavComponentProps): JSX.Element => {
  const { filterLabelCampaign, filterLabelDataSource, filterButton } = translations;
  const dataSources = useAppSelector((state) => getDataTypeUnique(state.chartArea.data, 1));
  const campaigns = useAppSelector((state) => getDataTypeUnique(state.chartArea.data, 2));

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
          options={dataSources}
        />
        <ButtonComponent
          sx={{ alignSelf: 'flex-end', marginLeft: '1rem' }}
          buttonText={filterButton}
          isPrimary
        />
      </Row>
      <Row>
        <SelectFromComponent labelText={filterLabelCampaign} selectFormValues={campaigns} />
      </Row>
    </FilterNavContainerStyled>
  );
};
