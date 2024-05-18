import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { TextFieldProps } from '@mui/material/TextField';
import type { Dayjs } from 'dayjs';

import { DayValidationProps } from '@mui/x-date-pickers/internals';
import { dayjsInstance } from '@tech/utils/date';

type DatePickerHookFormProps = {
  name: string;
  label: string;
  minDate?: Dayjs | null;
  maxDate?: any;
  disableFuture?: boolean;
  inputProps?: any;
  shouldDisableDate?: DayValidationProps<any>['shouldDisableDate'];
} & TextFieldProps;

export const DatePickerHookForm = memo<DatePickerHookFormProps>(
  function DatePickerHookForm({
    name,
    label,
    minDate = null,
    maxDate = null,
    disableFuture = true,
    helperText = null,
    shouldDisableDate = undefined,
    ...props
  }: DatePickerHookFormProps) {
    const { control } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field, fieldState }) => {
          return (
            <DatePicker
              label={label}
              format="DD/MM/YYYY"
              minDate={minDate}
              disableFuture={disableFuture}
              maxDate={maxDate}
              value={field.value ? dayjsInstance(field.value) : null}
              onChange={(date: any) => {
                field.onChange(date?.format('YYYY/MM/DD') || null);
              }}
              shouldDisableDate={shouldDisableDate}
              slotProps={{
                textField: {
                  // placeholder: label,
                  size: 'small',
                  error: !!fieldState.error,
                  helperText: fieldState?.error?.message || helperText,
                  InputProps: {
                    ...props?.inputProps,
                  },
                  sx: {
                    minWidth: 150,
                    ...props?.sx,
                  },
                },
              }}
            />
          );
        }}
      />
    );
  }
);
