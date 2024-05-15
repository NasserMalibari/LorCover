import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardBox({name, regions}) {

  const navigate = useNavigate();
  return <Box sx={{border: '2px solid black'}}>
    {name} {regions}
  </Box>
}

export default CardBox;
