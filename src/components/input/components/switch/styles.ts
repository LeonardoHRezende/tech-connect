import { styled } from '@mui/material';
import Switch from '@mui/material/Switch';

export const MuiSwitch = styled(Switch)`
  width: 32px;
  height: 16px;
  padding: 0;
  display: flex;

  &:active {
    & .MuiSwitch-thumb {
      width: 15px;
    }

    & .MuiSwitch-switchBase.Mui-checked {
      transform: translateX(px);
    }
  }

  & .MuiSwitch-switchBase {
    padding: 2px;

    &.Mui-checked {
      transform: translateX(16px);
      color: #fff;

      & + .MuiSwitch-track {
        opacity: 1;
        background-color: #7e00ba;
      }
    }
  }

  & .MuiSwitch-thumb {
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition: width 200ms;
  }
  & .MuiSwitch-track {
    border-radius: 8px;
    opacity: 1;
    background-color: #e3e3e3;
    box-sizing: border-box;
  }
`;
