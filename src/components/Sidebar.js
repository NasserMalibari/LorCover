import { Box, Button, Typography } from '@mui/material';
import React from "react";
import RegionBox from './RegionBox';


function Sidebar({toggleRegions, regions}) {

  const selectedStyle = {
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
    border: '2px solid #333'
  }

  return <>
    <Box sx={{ color: 'white', width: 250, height: 'calc(100vh - 104px)', backgroundColor: '#fff',
     display: 'flex', flexDirection: 'column', gap: '10px',
     overflowY: 'auto', paddingBottom: '20px', paddingTop: '20px' }}>
      <Box sx={regions['Demacia'] ? selectedStyle : {}} onClick={() => toggleRegions('Demacia')}>
        <RegionBox imageUrl='./Demacia.png' progressValue={50} backgroundColor={"#decb9d"} />
      </Box>
      <Box sx={regions['Ionia'] ? selectedStyle : {}} onClick={() => toggleRegions('Ionia')}>
        <RegionBox imageUrl='./Ionia.png' progressValue={50} backgroundColor={"#c05b7c"}/>
      </Box>
      <Box sx={regions['Targon'] ? selectedStyle : {}} onClick={() => toggleRegions('Targon')}>
        <RegionBox imageUrl='./Targon.png' progressValue={50} backgroundColor={"#5653dd"}/>
      </Box>
      <Box sx={regions['Runeterra'] ? selectedStyle : {}} onClick={() => toggleRegions('Runeterra')}>
        <RegionBox imageUrl='./Runeterra.png' progressValue={50} backgroundColor={"#9a9a9a"}/>
      </Box>
      <Box sx={regions['Piltover & Zaun'] ? selectedStyle : {}} onClick={() => toggleRegions('Piltover & Zaun')}>
        <RegionBox imageUrl='./PiltoverZaun.png' progressValue={50} backgroundColor={"#dfc344"}/>
      </Box>
      <Box sx={regions['Noxus'] ? selectedStyle : {}} onClick={() => toggleRegions('Noxus')}>
        <RegionBox imageUrl='./Noxus.png' progressValue={50} backgroundColor={"#781f19"}/>
      </Box>
      <Box sx={regions['Freljord'] ? selectedStyle : {}} onClick={() => toggleRegions('Freljord')}>
        <RegionBox imageUrl='./Freljord.png' progressValue={50} backgroundColor={"#7fdcf9"}/>
      </Box>
      <Box sx={regions['Bilgewater'] ? selectedStyle : {}} onClick={() => toggleRegions('Bilgewater')}>
        <RegionBox imageUrl='./Bilgewater.png' progressValue={50} backgroundColor={"#78221b"}/>
      </Box>
      <Box sx={regions['Bandle City'] ? selectedStyle : {}} onClick={() => toggleRegions('Bandle City')}>
        <RegionBox imageUrl='./BandleCity.png' progressValue={50} backgroundColor={"#96ae01"}/>
      </Box>
      <Box sx={regions['Shadow Isles'] ? selectedStyle : {}} onClick={() => toggleRegions('Shadow Isles')}>
        <RegionBox imageUrl='./ShadowIsles.png' progressValue={50} backgroundColor={"#077147"}/>
      </Box>
      <Box sx={regions['Shurima'] ? selectedStyle : {}} onClick={() => toggleRegions('Shurima')}>
        <RegionBox imageUrl='./Shurima.png' progressValue={50} backgroundColor={"#ecdc32"}/>
      </Box>
    </Box>
  </>
}

export default Sidebar;
