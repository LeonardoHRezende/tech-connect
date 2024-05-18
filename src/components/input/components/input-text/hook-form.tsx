import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { InputText, InputTextProps } from './index';

type InputHookFormProps = InputTextProps & {
  name: string;
};

export const InputTextHookForm = memo<InputHookFormProps>(
  function InputHookForm({
    name,
    ...inputProps
  }: InputHookFormProps) {
    const { control } = useFormContext();

    const {
      field: { onChange, value, onBlur },
      fieldState,
    } = useController({
      name,
      control,
      defaultValue: inputProps?.defaultValue ? inputProps?.defaultValue : '',
    });

    return (
      <InputText
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        error={!!fieldState.error}
        helperText={fieldState?.error?.message}
        {...inputProps}
      />
    );
  }
);
