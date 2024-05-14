import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Page2() {
  const navigate = useNavigate();

  return <>
    Page2
    <Button variant="contained" onClick={() => navigate('/page1')}>Page1</Button>
  </>
}

export default Page2;
