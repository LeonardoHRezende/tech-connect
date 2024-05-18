import type { AlertProps } from '@mui/material';

export interface OpenSnackbarProps {
  message: string;
  autoHideDuration?: number;
  type?: AlertProps['severity'];
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'center' | 'right';
}

export interface SnackbarState extends OpenSnackbarProps {
  isOpen: boolean;
  autoHideDuration?: number;
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface SnackbarProps {
  handleClose: () => void;
  isOpen: boolean;
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  type: AlertProps['severity'];
  message: string;
  autoHideDuration?: number;
}
