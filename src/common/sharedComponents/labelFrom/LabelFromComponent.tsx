import React, { FC } from 'react';

type LabelFromComponentProps = {
  labelText: string;
};

export const LabelFromComponent: FC<LabelFromComponentProps> = ({
  labelText
}: LabelFromComponentProps): JSX.Element => {
  return <label>{labelText}</label>;
};
