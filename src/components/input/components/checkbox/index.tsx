import * as React from 'react';
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';
import { useTheme } from '@mui/material';

export const Checkbox = (props: CheckboxProps) => {
  const theme = useTheme();

  return (
    <MuiCheckbox
      {...props}
    />
  );
};
