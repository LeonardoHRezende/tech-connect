"use client";

import { ReactNode, createContext, memo, useCallback, useState } from 'react';
import { Snackbar } from '.';
import { OpenSnackbarProps, SnackbarState } from './interface';

export const SnackbarContext = createContext({
  closeSnackbar: () => {},
  openSnackbar: (props: OpenSnackbarProps) => {},
});

export const SnackbarProvider = memo<{ children: ReactNode }>(
  function SnackbarProvider({ children }) {
    const [state, setState] = useState<SnackbarState>({
      isOpen: false,
      message: '',
      type: 'success',
      vertical: 'bottom',
      horizontal: 'right',
      autoHideDuration: 6000,
    });

    const handleClose = useCallback(() => {
      setState((state) => ({
        ...state,
        isOpen: false,
      }));
    }, [setState]);

    const openSnackbar = useCallback(
      (props: OpenSnackbarProps) => {
        setState((state: any) => ({
          ...state,
          type: 'success',
          vertical: 'bottom',
          horizontal: 'right',
          ...props,
          autoHideDuration: props?.autoHideDuration || 6000,
          isOpen: true,
        }));
      },
      [setState]
    );

    return (
      <SnackbarContext.Provider
        value={{
          closeSnackbar: handleClose,
          openSnackbar,
        }}
      >
        {children}
        <Snackbar type={state.type!} {...state} handleClose={handleClose} />
      </SnackbarContext.Provider>
    );
  }
);
