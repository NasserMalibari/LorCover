import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


function ContentArea({champions, followers}) {

  return <>
    <Box sx={{display: 'flex'}}>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <MainContent champions={champions} followers={followers}/>
      </Box>
    </Box>
  </>
}

export default ContentArea;
