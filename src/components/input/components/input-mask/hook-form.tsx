import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import MaskedInput from 'react-input-mask';
import type { TextFieldProps } from '@mui/material';
import { InputText } from '../input-text';

type InputMaskProps = TextFieldProps & {
  name: string;
  mask: string;
};

export const InputMaskHookForm = memo<InputMaskProps>(function InputHookForm({
  name,
  mask,
  ...inputProps
}) {
  const { control } = useFormContext();

  const {
    field: { onChange, value, onBlur, ref },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue: inputProps?.defaultValue ? inputProps?.defaultValue : '',
  });

  return (
    <MaskedInput mask={mask} value={value} onChange={onChange} onBlur={onBlur}>
      {(props: any) => (
        <InputText
          {...inputProps}
          InputProps={props}
          inputRef={ref}
          helperText={fieldState?.error?.message}
          error={!!fieldState.error}
        />
      )}
    </MaskedInput>
  );
});
