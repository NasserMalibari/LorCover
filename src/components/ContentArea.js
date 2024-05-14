import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";


function ContentArea() {

  return <>
    <Box sx={{display: 'flex'}}>
      <Sidebar />
      <Box
      sx={{
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        overflowY: 'auto',
        padding: '0px', // Add some padding
      }}
    >
      {/* Main content */}
      Main Content
    </Box>
    </Box>
  </>
}

export default ContentArea;
