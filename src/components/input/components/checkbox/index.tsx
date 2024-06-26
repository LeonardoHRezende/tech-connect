import * as React from 'react';
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';

export const Checkbox = (props: CheckboxProps) => {


  return (
    <MuiCheckbox
      {...props}
    />
  );
};
