import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { MdOutlineWbSunny } from 'react-icons/md';
import { RiMoonClearLine } from 'react-icons/ri';

interface ChangeThemeButtonProps {
  theme: string;
  changeTheme: () => void;

}

export const ChangeThemeButton = ({ theme, changeTheme }: ChangeThemeButtonProps) => {

  return (
    <Tooltip title="Alterar tema da página">
      <span>
        <IconButton
          onClick={changeTheme}
        >
          {
            theme === 'light' ? (
              <MdOutlineWbSunny size={20} color="#0f1214" />
            ) : (
              <RiMoonClearLine size={20} color="#eefff6" />
            )
          }
        </IconButton>
      </span>
    </Tooltip>
  )
}