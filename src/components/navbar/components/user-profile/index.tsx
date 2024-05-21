import { memo, useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import ListItem from '@mui/material/ListItem';

import { GoSignOut } from 'react-icons/go';


export const UserProfileNavBar = memo<UserProfileNavBarProps>(function UserProfileNavBar({
  user,
  signOut
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const getShortName = (name) => {
    if (!name) return '';
    return name.length > 10 ? name.slice(0, 10) + '...' : name;
  };


  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        component='button'
        onClick={handleClick}
        sx={{
          border: 'none',
          bgcolor: 'transparent',
          cursor: 'pointer'
        }}
      >
        <Avatar
          alt="user"
          sx={{
            width: 40,
            height: 40
          }}
        />
        {
          open && (
            <Box
            >
              <Typography variant="body1">
                {getShortName(user?.firstName)}
              </Typography>
            </Box>
          )
        }
      </Stack>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ListItem onClick={signOut}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" width="100px">
            <Typography>
              Sair
            </Typography>
            <GoSignOut />
          </Stack>
        </ListItem>
      </Popover>
    </>
  )
})

interface UserProfileNavBarProps {
  user: {
    firstName: string;
    image: string;
  }
  signOut: () => void;
}