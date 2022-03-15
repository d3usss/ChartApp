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
  height: 30px;
  width: 50px;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => (props.isPrimary ? 'gray' : 'lightgray')};
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};

  &::disabled {
    opacity: 0.5;
  }
`;

export const ButtonComponent: FC<Partial<ButtonStyledProps>> = ({
  buttonText,
  isDisabled = false,
  onClick,
  sx
}: Partial<ButtonStyledProps>) => {
  return (
    <ButtonStyled disabled={isDisabled} onClick={onClick} style={sx}>
      {buttonText}
    </ButtonStyled>
  );
};
