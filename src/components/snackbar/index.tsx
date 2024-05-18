import { memo, useCallback } from 'react';
import SnackbarMui from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { SnackbarProps } from './interface';
import type { Theme } from '@mui/material';

import { IoIosCheckmarkCircleOutline, IoIosInformationCircleOutline } from 'react-icons/io';
import { IoWarningOutline } from 'react-icons/io5';

const IconType = ({ type }: Partial<SnackbarProps>) => {
  switch (type) {
    case 'success':
      return <IoIosCheckmarkCircleOutline size={22} />;
    case 'error':
      return <IoWarningOutline size={22} />;
    case 'warning':
      return <IoWarningOutline size={22} />;
    case 'info':
      return <IoIosInformationCircleOutline size={22} />;
    default:
      return <IoIosInformationCircleOutline size={22} />;
  }
};

function TransitionUP(props: any) {
  return <Slide {...props} direction="up" />;
}
function TransitionBottom(props: any) {
  return <Slide {...props} direction="down" />;
}

export const Snackbar = memo<SnackbarProps>(function Snackbar({
  handleClose,
  ...state
}) {
  const getIconColor = useCallback(
    (theme: Theme) => {
      switch (state.type) {
        case 'success':
          return theme.palette.success.light;
        case 'error':
          return theme.palette.error.light;
        case 'warning':
          return theme.palette.warning.light;
        case 'info':
          return theme.palette.info.light;
        default:
          return theme.palette.common.white;
      }
    },
    [state.type]
  );

  const IconBox = () => (
    <div>
      <Box
        p="6px"
        borderRadius={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor={(theme) => getIconColor(theme)}
      >
        <IconType type={state.type} />
      </Box>
    </div>
  );

  return (
    <SnackbarMui
      open={state.isOpen}
      autoHideDuration={state.autoHideDuration}
      anchorOrigin={{ vertical: state.vertical, horizontal: state.horizontal }}
      key={state.vertical + state.horizontal}
      onClose={handleClose}
      TransitionComponent={
        state.vertical === 'top' ? TransitionBottom : TransitionUP
      }
    >
      <Alert
        onClose={handleClose}
        severity={state.type}
        sx={{
          backgroundColor: '#fff',
          maxWidth: 400,
          fontWeight: 500,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)',
          borderRadius: 2,
          '.MuiAlert-message': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
        icon={<IconBox />}
      >
        {state.message}
      </Alert>
    </SnackbarMui>
  );
});

export * from './hook';
