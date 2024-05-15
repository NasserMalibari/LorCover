import { Box, Typography } from '@mui/material';
import React from "react";
import RegionBox from './RegionBox';


function Sidebar() {

  return <>
    <Box sx={{ color: 'white', width: 250, height: 'calc(100vh - 104px)', backgroundColor: '#333',
     display: 'flex', flexDirection: 'column', gap: '10px',
     overflowY: 'auto', paddingBottom: '20px', paddingTop: '20px' }}>
      <RegionBox imageUrl='./Demacia.png' progressValue={50} backgroundColor={"#f9a825"}/>
      <RegionBox imageUrl='./Ionia.png' progressValue={50} backgroundColor={"#c05b7c"}/>
      <RegionBox imageUrl='./Targon.png' progressValue={50} backgroundColor={"#5653dd"}/>
      <RegionBox imageUrl='./Runeterra.png' progressValue={50} backgroundColor={"#9a9a9a"}/>
      <RegionBox imageUrl='./PiltoverZaun.png' progressValue={50} backgroundColor={"#dfc344"}/>
      <RegionBox imageUrl='./Noxus.png' progressValue={50} backgroundColor={"#781f19"}/>
      <RegionBox imageUrl='./Freljord.png' progressValue={50} backgroundColor={"#7fdcf9"}/>
      <RegionBox imageUrl='./Bilgewater.png' progressValue={50} backgroundColor={"#78221b"}/>
      <RegionBox imageUrl='./BandleCity.png' progressValue={50} backgroundColor={"#96ae01"}/>
      <RegionBox imageUrl='./ShadowIsles.png' progressValue={50} backgroundColor={"#077147"}/>
      <RegionBox imageUrl='./Shurima.png' progressValue={50} backgroundColor={"#ecdc32"}/>
    </Box>
  </>
}

export default Sidebar;
