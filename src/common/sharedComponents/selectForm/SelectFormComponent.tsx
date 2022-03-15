import React, { FC } from 'react';
import styled from 'styled-components';
import { LabelFromComponent } from '../labelFrom/LabelFromComponent';

type SelectFromComponentProps = {
  selectFormValues: string[];
  labelText: string;
};

const SectionContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SelectStyled = styled.select`
  min-width: 300px;
  height: 40px;
  border: 1px solid lightgray;
  padding: 0.5rem;
`;

export const SelectFromComponent: FC<SelectFromComponentProps> = ({
  selectFormValues,
  labelText
}: SelectFromComponentProps): JSX.Element => {
  return (
    <SectionContainerStyled>
      <LabelFromComponent labelText={labelText} />
      <SelectStyled>
        {selectFormValues.map((val: string, index: number) => (
          <option key={`${val}-${index}`}>{val}</option>
        ))}
      </SelectStyled>
    </SectionContainerStyled>
  );
};
