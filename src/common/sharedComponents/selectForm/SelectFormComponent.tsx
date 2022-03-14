import React, { FC } from 'react';
import styled from 'styled-components';
import { LabelFromComponent } from '../labelFrom/LabelFromComponent';

type SelectFromComponentProps = {
  selectFormValues: string[];
  labelText: string;
};

const SelectStyled = styled.select`
  min-width: 250px;
`;

export const SelectFromComponent: FC<SelectFromComponentProps> = ({
  selectFormValues,
  labelText
}: SelectFromComponentProps): JSX.Element => {
  return (
    <>
      <LabelFromComponent labelText={labelText} />
      <SelectStyled>
        {selectFormValues.map((val: string, index: number) => (
          <option key={`${val}-${index}`}>{val}</option>
        ))}
      </SelectStyled>
    </>
  );
};
