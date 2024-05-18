import React, { useRef, useState } from 'react';
import { TextField, IconButton, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyField = ({ value }) => {
  const fontColor = {
      style: { color: '#FFFFFF' }
  }
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState(value);


  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(code);
  };
  return <>
    <TextField value={code} inputProps={fontColor}/>
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