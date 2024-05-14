import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Page1() {

  const navigate = useNavigate();
  return <>
    Page1
    <Button variant="contained" onClick={() => navigate('/page2')}>Page2</Button>
    </>
}

export default Page1;
