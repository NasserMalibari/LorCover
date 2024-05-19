import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { FormControl, InputLabel, InputAdornment } from '@mui/material';

function LoadProfile({open, handleClose, loadProfile}) {

  const [code, setCode] = useState('');


  return <Dialog
  open={open}
  onClose={handleClose}
>
 <DialogTitle>Enter CODE</DialogTitle>
 <DialogContent>
   <TextField
     autoFocus
     required
     margin="normal"
     id="name"
     name="email"
     label="Code"
     type="text"
     fullWidth
     variant="standard"
     sx={{ 'marginRight': '10px'}}
     onChange={(event) => setCode(event.target.value)}
   />
 </DialogContent>
 <DialogActions>
   <Button onClick={handleClose}>Cancel</Button>
   <Button onClick={() => {
    loadProfile(code);
    handleClose();
   }} type="button">Load</Button>
 </DialogActions>
</Dialog>
}

export default LoadProfile;

