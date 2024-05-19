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
import LoadProfile from './LoadProfile';



function SubNav({riotID, numCardsCompleted, numGames, progressCode, openProfile, loadProfile}) {

  const [openLoadProfile, setOpenLoadProfile] = React.useState(false);


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#172c70'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: '60px', display: { xs: 'none', sm: 'block' } }}
          >
            {riotID}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: '10px', display: { xs: 'none', sm: 'block' } }}
          >
            {numCardsCompleted} / 1005
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: '60px', display: { xs: 'none', sm: 'block' } }}
          >
            ({(numCardsCompleted * 100 / 1005).toFixed(1)}%)
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight:'60px', display: { xs: 'none', sm: 'block' } }}
          >
            {numGames} games
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight:'40px', display: { xs: 'none', sm: 'block' } }}
          >
            Copy Progress
          </Typography>
          <CopyField value={progressCode} />
          {/* <Button variant="outlined" color="error">Reset Progress</Button> */}
          <Button sx={{marginRight: '10px'}} onClick={openProfile} variant="contained" color="primary">New Profile</Button>
          <Button onClick={() => setOpenLoadProfile(true)} variant="contained" color="primary">Load Profile</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <LoadProfile open={openLoadProfile} 
    handleClose={() => setOpenLoadProfile(false)}
    loadProfile={loadProfile}
    />
    </>
  );
}

export default SubNav;
