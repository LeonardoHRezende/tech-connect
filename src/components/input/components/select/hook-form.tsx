import { memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';

import { ISelectProps, Select } from '.';

type SelectHookFormProps = ISelectProps & {
  name: string;
};

export const SelectHookForm = memo<SelectHookFormProps>(function InputHookForm({
  name,
  ...inputProps
}: SelectHookFormProps) {
  const { control } = useFormContext();

  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState }) => (
        <>
          <FormControl
            id={name}
            fullWidth={inputProps?.fullWidth}
            error={!!fieldState.error}
          >
            <Select
              onChange={onChange}
              selected={value}
              value={value}
              error={!!fieldState.error}
              {...inputProps}
            />
            {fieldState?.error?.message && (
              <FormHelperText>{fieldState?.error?.message}</FormHelperText>
            )}
          </FormControl>
        </>
      )}
    />
  );
});
