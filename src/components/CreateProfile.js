import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { FormControl, InputLabel, InputAdornment } from '@mui/material';

function CreateProfile({open, handleClose, startProfile}) {

  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [numMatches, setNumMatches] = useState(0);

  return <Dialog
  open={open}
  onClose={handleClose}
>
 <DialogTitle>Enter RIOT ID</DialogTitle>
 <DialogContent>
  <DialogContentText>
    Enter Riot Name and Tag
  </DialogContentText>
   <TextField
     autoFocus
     required
     margin="normal"
     id="name"
     name="email"
     label="Name"
     type="text"
     variant="standard"
     sx={{ 'marginRight': '10px'}}
     onChange={(event) => setName(event.target.value)}
   />
    <TextField
     autoFocus
     required
     margin="normal"
     id="tag"
     name="tag"
     label="Tag"
     type="text"
     variant="standard"
     onChange={(event) => setTag(event.target.value)}
   />
    <DialogContentText sx={{marginTop: '10px'}}>
      Get a head-start: How many of your recent matches do you want included?
    </DialogContentText>
   {/* <InputLabel sx={{marginTop: '20px', marginBottom: '10px'}} htmlFor="outlined-number">Get a head-start: How many of your recent matches do you want included?</InputLabel> */}
      <TextField
        id="outlined-number"
        onChange={(e) => setNumMatches(e.target.value)}
        type="number"
        value={numMatches}
        variant="outlined"
        inputProps={{
          min: 0,
          max: 20
        }}
    />  
 </DialogContent>
 <DialogActions>
   <Button onClick={handleClose}>Cancel</Button>
   <Button onClick={() => {
    startProfile(name, tag, numMatches);
    setName('');
    setTag('');
    handleClose();
   }} type="button">Create</Button>
 </DialogActions>
</Dialog>
}

export default CreateProfile;

