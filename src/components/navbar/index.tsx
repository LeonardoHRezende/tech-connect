import Appbar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { LogoDark } from '@tech/components/logo/dark';
import { LogoLight } from '@tech/components/logo/light';

import { ChangeThemeButton } from './components/change-theme-button';


export const Navbar = ({ theme }: { theme: string }) => {
  return (
    <Appbar
      position="static"
      sx={{
        bgcolor: 'transparent',
        boxShadow: `1px 1px 1px 1px ${theme === 'light' ? '#0f121409' : '#eefff609'}`,
        py: 1
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {
            theme === 'dark' ? <LogoLight /> : <LogoDark />
          }
          <ChangeThemeButton />
        </Stack>
      </Container>
    </Appbar>
  )
}