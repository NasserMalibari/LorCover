import React from "react";
import { Box } from '@mui/material';
import CardBox from "./CardBox";

function MainContent({cards}) {


  return <Box
  sx={{
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    overflowY: 'auto',
    padding: '0px', // Add some padding
  }}
  >
    <div>
      {cards.map((card, index) => (
        <CardBox key={index} name={card.name} regions={card.regions}/>
      ))}
    </div>
  </Box>
}

export default MainContent;
