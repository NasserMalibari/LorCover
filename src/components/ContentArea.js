import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


function ContentArea({cards}) {

  return <>
    <Box sx={{display: 'flex'}}>
      <Sidebar />
      <MainContent cards={cards}/>
    </Box>
  </>
}

export default ContentArea;
