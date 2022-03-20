import React, { FC } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { LabelFromComponent } from '../labelFrom/LabelFromComponent';

type MultiSelectFromComponentProps = {
  labelText: string;
  options: string[];
  onChange: (value: any[]) => void;
};

const { Option } = Select;

const MultiselectContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MultiSelectFromComponent: FC<MultiSelectFromComponentProps> = ({
  labelText,
  options,
  onChange
}: MultiSelectFromComponentProps): JSX.Element => {
  const handleChange = (value: string[]) => {
    onChange(value);
  };

  return (
    <MultiselectContainerStyled>
      <LabelFromComponent labelText={labelText} />
      <Select
        mode='tags'
        size='large'
        placeholder='Please select'
        onChange={handleChange}
        style={{ width: 300 }}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Select>
    </MultiselectContainerStyled>
  );
};
