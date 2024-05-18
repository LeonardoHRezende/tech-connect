import React, { ReactNode, memo } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface IMuiPickersUtilsProviderProps {
  children: ReactNode;
}

export const MuiPickersUtilsProvider = memo<IMuiPickersUtilsProviderProps>(
  function MuiPickersUtilsProviderBase({ children }) {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        {children}
      </LocalizationProvider>
    );
  }
);
