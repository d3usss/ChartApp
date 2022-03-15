import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { LabelFromComponent } from '../labelFrom/LabelFromComponent';

type MultiSelectFromComponentProps = {
  labelText: string;
  options: string[];
  onChange: (selectedItems: string[]) => void;
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
  // const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event: any) => {
    console.log(event);
  };

  return (
    <MultiselectContainerStyled>
      <LabelFromComponent labelText={labelText} />
      <Select
        mode='multiple'
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
