import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { ButtonComponent } from '../../common/sharedComponents/button/ButtonComponent';
import { MultiSelectFromComponent } from '../../common/sharedComponents/multiSelectForm/MultiSelectFromComponent';
import { SelectFromComponent } from '../../common/sharedComponents/selectForm/SelectFormComponent';
import { translations } from '../../common/translations/en';
import { Row } from '../../style/theme/layout.css';
import {
  campaignsForDatasourcesSelector,
  GET_CAMPAIGNS,
  SET_DATASOURCE
} from '../../features/filterNav/filterNavSlice';
import { dataSourcesSelector } from '../../features/filterNav/filterNavSlice';

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
  const { filterLabelCampaign, filterLabelDataSource } = translations;
  const dispatch = useAppDispatch();
  const allDatasourcesUnique = useAppSelector(dataSourcesSelector);
  const campaignsForDatasources = useAppSelector(campaignsForDatasourcesSelector);

  const onSelectDatasource = (datasource: string[]): void => {
    dispatch(SET_DATASOURCE(datasource));
  };

  const onSelectCampaigns = (value: string) => {
    dispatch(GET_CAMPAIGNS(value));
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
          options={allDatasourcesUnique}
        />
        {/* TODO: Add event for button and proper logic :)
         <ButtonComponent
          sx={{ alignSelf: 'flex-end', marginLeft: '1rem' }}
          buttonText={filterButton}
          isPrimary
        /> */}
      </Row>
      <Row>
        {/* this select have bug it's not clear value when passing empty array,
        I lost some time to fix and I am aware of it */}
        <SelectFromComponent
          labelText={filterLabelCampaign}
          selectFormValues={campaignsForDatasources}
          handleChange={onSelectCampaigns}
        />
      </Row>
    </FilterNavContainerStyled>
  );
};
