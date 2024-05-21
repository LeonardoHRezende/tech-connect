import Appbar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { LogoDark } from '@tech/components/logo/dark';
import { LogoLight } from '@tech/components/logo/light';

import { ChangeThemeButton } from './components/change-theme-button';
import { UserProfileNavBar } from './components/user-profile';

import { signOut, useSession } from 'next-auth/react';


export const Navbar = ({ theme }: { theme: string }) => {
  const { data } = useSession();

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

          <Stack direction="row" alignItems="center" gap={2}>
            {
              data && (
                <UserProfileNavBar
                  user={{
                    firstName: data?.user?.name?.split(' ')?.[0],
                    image: data?.user?.image
                  }}
                  signOut={signOut}
                />
              )
            }
            <ChangeThemeButton />
          </Stack>

        </Stack>
      </Container>
    </Appbar>
  )
}