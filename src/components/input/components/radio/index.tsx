import * as React from 'react';
import MuiRadio, { RadioProps } from '@mui/material/Radio';
import { useTheme } from '@mui/material';

export const Radio = (props: RadioProps) => {
  const theme = useTheme();

  return (
    <MuiRadio
      sx={{
        padding: 0,
        mx: 1,
      }}
      {...props}
    />
  );
};
