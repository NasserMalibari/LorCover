import { Box, LinearProgress } from '@mui/material';
import React from "react";
import { CProgress, CProgressBar } from '@coreui/bootstrap-react'


function RegionBox({imageUrl, progressValue, backgroundColor }) {

return <>
  <div style={{ textAlign: 'center' }}>
    <img src={imageUrl} width={100} height={100} />
  </div>
  <div style={{ paddingLeft: 10, paddingRight: 10 }}>
    <LinearProgress
      variant="determinate"
      // 0 to 100
      value={progressValue}
      sx={{
        height: 10,
        width: '100%',
        backgroundColor: '#ffffff', // Set the background color to yellow
        '& .MuiLinearProgress-bar': {
          backgroundColor: {backgroundColor}, // Set the color of the progress bar to yellow
          backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
          backgroundSize: '1rem 1rem', // Set the size of the stripes
        },
      }}
    />
  </div>
</>
}

export default RegionBox;
