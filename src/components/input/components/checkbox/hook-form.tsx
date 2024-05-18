import React, { ReactNode, memo } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormHelperText, Stack } from '@mui/material';

type CheckboxHookFormProps = {
  name: string;
  label?: string;
  checkboxProps?: CheckboxProps;
  children?: ReactNode;
};

export const CheckboxHookForm = memo(function CheckboxHookForm({
  name,
  label,
  children,
  checkboxProps = {},
}: CheckboxHookFormProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field, fieldState }) => (
        <FormControl
          error={!!fieldState.error}
          variant="standard"
        >
          <Stack direction="row" alignItems="center">
            <FormControlLabel
              sx={{ m: 0 }}
              control={<MuiCheckbox {...field} {...checkboxProps} />}
              label={label!}
            />
            {children}
          </Stack>
          {Boolean(fieldState.error) && (
            <FormHelperText sx={{ml: 2}}>{fieldState?.error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
});
