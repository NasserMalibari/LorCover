import React, { useRef, useState } from 'react';
import { TextField, IconButton, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyField = ({ value }) => {
  const fontColor = {
      style: { color: '#FFFFFF' }
  }
  const [open, setOpen] = useState(false);



  const handleClick = () => {
    setOpen(true);
    console.log(value);
    navigator.clipboard.writeText(value);
  };
  return <>
    {/* <TextField value={value} inputProps={fontColor}/> */}
    <IconButton onClick={handleClick} color="primary">
      <ContentCopyIcon />
    </IconButton>
    <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
    />
  </>
};

export default CopyField;