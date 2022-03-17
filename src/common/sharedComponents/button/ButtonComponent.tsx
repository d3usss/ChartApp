import React, { CSSProperties, FC, MouseEvent } from 'react';
import styled from 'styled-components';

type ButtonStyledProps = {
  isPrimary: boolean;
  isDisabled: boolean;
  buttonText: string;
  disabled: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  sx: CSSProperties;
};

const ButtonStyled = styled.button<Partial<ButtonStyledProps>>`
  height: 40px;
  min-width: 50px;
  padding: 0.5rem;
  border: 1px solid lightgray;
  background-color: ${({ isPrimary }) => (isPrimary ? 'gray' : 'lightgray')};
  color: ${({ isPrimary }) => (isPrimary ? 'lightgray' : 'white')};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  &::disabled {
    opacity: 0.5;
  }
`;

export const ButtonComponent: FC<Partial<ButtonStyledProps>> = ({
  buttonText,
  isDisabled = false,
  isPrimary,
  onClick,
  sx
}: Partial<ButtonStyledProps>) => {
  return (
    <ButtonStyled disabled={isDisabled} isPrimary={isPrimary} onClick={onClick} style={sx}>
      {buttonText}
    </ButtonStyled>
  );
};
