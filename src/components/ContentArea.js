import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


function ContentArea({champions, followers, toggleRegions, regions}) {

  return <>
    <Box sx={{display: 'flex', backgroundColor: '#272623', color: 'white' }}>
      <Box>
        <Sidebar toggleRegions={toggleRegions} regions={regions}/>
      </Box>
      <Box>
        <MainContent champions={champions} followers={followers}/>
      </Box>
    </Box>
  </>
}

export default ContentArea;
