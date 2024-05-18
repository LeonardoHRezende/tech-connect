import {
  Divider,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import { Box, BoxTypeMap } from '@mui/system';
import React, { ReactElement, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';

export type InputTextProps = TextFieldProps & {
  variantSize?: 'small' | 'regular';
  identifierIcon?: ReactElement<IconBaseProps>;
  actions?: Array<{
    icon: ReactElement<IconBaseProps>;
    handler: () => void;
  }>;
  actionIcon?: ReactElement<IconBaseProps>;
  additionalData?: string;
  isEditing?: boolean;
  handleAction?: () => void;
  containerProps?: DefaultComponentProps<BoxTypeMap>;
};

export const InputText = ({
  variantSize = 'regular',
  label,
  id,
  handleAction = () => {},
  isEditing = false,
  InputProps,
  containerProps,
  ...props
}: InputTextProps) => {
  const keyToId = (props.name || label || props.placeholder) as string;
  const inputId = id || keyToId?.toLowerCase().replaceAll(' ', '-');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing, inputRef.current]);

  return (
    <Box {...containerProps}>
      {label && <Typography variant="caption">{label}</Typography>} 

      <TextField
        fullWidth
        inputRef={inputRef}
        sx={{
          '& .MuiInputBase-root.Mui-focused fieldset': {
            borderColor: 'secondary.main',
            flexShrink: 1,
          },
          '& .MuiInputBase-root': {
            maxHeight:
              props.rows || props.maxRows || props.multiline
                ? 'none'
                : variantSize === 'regular'
                ? 40
                : 32,
          },
        }}
        id={inputId}
        variant="outlined"
        placeholder={props?.placeholder}
        InputProps={{
          startAdornment: props.identifierIcon ? (
            <InputAdornment position="start">
              {variantSize === 'small'
                ? React.cloneElement(props.identifierIcon, { size: 16 })
                : React.cloneElement(props.identifierIcon, { size: 24 })}
            </InputAdornment>
          ) : undefined,
          endAdornment: (
            <InputAdornment position="start">
              {props.actions?.map((action,index) => (
                <IconButton
                  key={index}
                  onClick={action.handler}
                  size={variantSize === 'small' ? 'small' : 'medium'}
                >
                  {variantSize === 'small'
                    ? React.cloneElement(action.icon, { size: 16 })
                    : React.cloneElement(action.icon, { size: 24 })}
                </IconButton>
              ))}
              {props.additionalData && (
                <>
                  <Divider sx={{ height: 16, mx: 1 }} orientation="vertical" />
                  {props.additionalData}
                </>
              )}
            </InputAdornment>
          ),
          sx: {
            ...props?.sx,
          },
          ...InputProps,
        }}
        {...props}
      />
    </Box>
  );
};
