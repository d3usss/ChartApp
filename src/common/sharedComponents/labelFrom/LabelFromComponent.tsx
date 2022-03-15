import React, { FC } from 'react';
import styled from 'styled-components';

type LabelFromComponentProps = {
  labelText: string;
};

const LabelStyled = styled.label`
  font-weight: 600;
  padding-bottom: 0.4rem;
`;

export const LabelFromComponent: FC<LabelFromComponentProps> = ({
  labelText
}: LabelFromComponentProps): JSX.Element => {
  return <LabelStyled>{labelText}</LabelStyled>;
};
