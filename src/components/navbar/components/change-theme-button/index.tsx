import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { useThemeStore } from '@tech/context';
import { MdOutlineWbSunny } from 'react-icons/md';
import { RiMoonClearLine } from 'react-icons/ri';

export const ChangeThemeButton = () => {

  const { themeMode, toggleTheme }: any = useThemeStore();

  const handleToggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  }

  return (
    <Tooltip title="Alterar tema da página">
      <span>
        <IconButton
          onClick={handleToggleTheme}
        >
          {
            themeMode === 'light' ? (
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