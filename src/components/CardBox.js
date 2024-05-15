import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardBox({name, regions, path, completed}) {

  const [isHovered, setIsHovered] = useState(false);

  return <Box onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  sx={{border: '2px solid black', width: '260px', height: '30px', display:'flex', justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Box>{name} {regions}</Box>
    {isHovered && (
        <img
          src={path}
          alt={name}
          style={{ position: 'absolute', top: '50px', left: '50%', height: '250px', transform: 'translateX(-50%)' }}
        />
      )}
  </Box>
}

export default CardBox;
