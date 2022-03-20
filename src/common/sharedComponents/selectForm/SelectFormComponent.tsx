import React, { FC } from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import { LabelFromComponent } from '../labelFrom/LabelFromComponent';

type SelectFromComponentProps = {
  selectFormValues: string[];
  labelText: string;
  handleChange: (value: string) => void;
};

const { Option } = Select;

const SectionContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectFromComponent: FC<SelectFromComponentProps> = ({
  selectFormValues,
  labelText,
  handleChange
}: SelectFromComponentProps): JSX.Element => {
  return (
    <SectionContainerStyled>
      <LabelFromComponent labelText={labelText} />
      <Select showSearch placeholder={labelText} style={{ width: 300 }} onChange={handleChange}>
        {selectFormValues.map((val: string, index: number) => (
          <Option key={`$${index}-${val}`} value={val}>
            {val}
          </Option>
        ))}
      </Select>
    </SectionContainerStyled>
  );
};
