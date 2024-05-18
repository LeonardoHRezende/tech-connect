import React, { memo } from 'react';

import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import type { TextFieldProps } from '@mui/material/TextField';
import { dayjsInstance } from '@tech/utils/date';


type DatePickerHookProps = {
  label: string;
  minDate?: any;
  maxDate?: any;
  disableFuture?: boolean;
  inputProps?: any;
  onChange?: (date: string | null) => void;
} & TextFieldProps;

export const DatePicker = memo<DatePickerHookProps>(function DatePicker({
  label,
  minDate = null,
  maxDate = null,
  disableFuture = true,
  helperText = null,
  value,
  onChange,
  defaultValue,
  ...props
}: DatePickerHookProps) {
  return (
    <MuiDatePicker
      format="DD/MM/YYYY"
      minDate={minDate}
      disableFuture={disableFuture}
      maxDate={maxDate}
      value={value ? dayjsInstance(value as any) : null}
      onChange={(date: any) => {
        if (!onChange) return;

        onChange(date?.format('YYYY/MM/DD') || null);
      }}
      slotProps={{
        textField: {
          placeholder: label,
          size: 'small',
          InputProps: {
            ...props?.inputProps,
          },
          sx: {
            minWidth: 150,
            ...props?.sx,
          },
          ...props
        },
      }}
    />
  );
});
