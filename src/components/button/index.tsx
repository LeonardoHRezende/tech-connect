import type { ExtendButtonBase } from '@mui/material';
import ButtonMui, {
  ButtonTypeMap,
  ButtonProps as MuiButtonProps,
} from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { ReactNode } from 'react';

export interface ButtonProps extends MuiButtonProps {
  children?: ReactNode;
  loading?: boolean;
}

export const Button: ExtendButtonBase<ButtonTypeMap<ButtonProps, 'button'>> = ({
  children,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonMui
      {...props}
      endIcon={
        loading ? (
          <CircularProgress size={props.size === 'large' ? 20 : 16} />
        ) : (
          props.endIcon
        )
      }
      disabled={props.disabled || loading}
      sx={{textTransform: 'none'}}
    >
      {children}
    </ButtonMui>
  );
};

export default Button;
