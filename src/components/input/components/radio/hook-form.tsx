import { ReactNode, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  type RadioProps,
  type RadioGroupProps,
  FormControl,
  FormHelperText,
} from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';

type RadioHookFormProps = RadioProps & {
  name: string;
  children: ReactNode;
  radioGroupProps?: RadioGroupProps;
};

export const RadioHookForm = memo<RadioHookFormProps>(function InputHookForm({
  name,
  children,
  radioGroupProps = {},
  sx = {},
}: RadioHookFormProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl
          sx={{ my: 3, ...sx }}
          error={!!fieldState.error}
          variant="standard"
        >
          <RadioGroup {...radioGroupProps} {...field}>
            {children}
          </RadioGroup>
          {Boolean(fieldState.error) && (
            <FormHelperText>{fieldState?.error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
});
