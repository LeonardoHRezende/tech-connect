import { memo, useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import ListItem from '@mui/material/ListItem';

import { GoSignOut } from 'react-icons/go';
import { useTheme } from '@mui/material';


export const UserProfileNavBar = memo<UserProfileNavBarProps>(function UserProfileNavBar({
  user,
  signOut
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const theme = useTheme();

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
        sx={{
          '& .MuiPaper-root': {
            minWidth: 200
          }
        }}
      >
        <ListItem
          onClick={signOut}
          sx={(theme) => (
            {
              '&:hover': {
                cursor: 'pointer',
                bgcolor: theme.palette.action.hover
              }
            }
          )}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
            <Typography>
              Sair
            </Typography>
            <GoSignOut color={theme.palette.primary.contrastText}/>
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