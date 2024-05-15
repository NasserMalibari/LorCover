import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import CopyField from './CopyField';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function SubNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#172c70'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: '60px', display: { xs: 'none', sm: 'block' } }}
          >
            Naś #OCE
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: '60px', display: { xs: 'none', sm: 'block' } }}
          >
            0 / 100
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: '60px', display: { xs: 'none', sm: 'block' } }}
          >
            ( 0% )
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight:'60px', display: { xs: 'none', sm: 'block' } }}
          >
            0 games
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight:'40px', display: { xs: 'none', sm: 'block' } }}
          >
            Copy Progress
          </Typography>
          <CopyField />
          <Button variant="outlined" color="error">Reset Progress</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SubNav;