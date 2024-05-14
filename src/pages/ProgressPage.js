import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Nav from "../components/NavBar";
import SubNav from "../components/SubNav";
import ContentArea from "../components/ContentArea";
import { Box } from "@mui/material";

function ProgressPage() {

  const navigate = useNavigate();
  return <>
    {/* <Nav /> */}
    <SubNav />
    <ContentArea />
  </>
}

export default ProgressPage;
