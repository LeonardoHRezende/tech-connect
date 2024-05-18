import type { SwitchProps, SxProps } from "@mui/material";
import { memo } from "react";
import { MuiSwitch } from "./styles";

interface CustomSwitchProps extends SwitchProps {
  sx?: SxProps;
}

export const Switch = memo(function Switch({
  sx,
  ...props
}: CustomSwitchProps) {
  return (
    <MuiSwitch
      sx={sx}
      {...props}
    />
  );
});
