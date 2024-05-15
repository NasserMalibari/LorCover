import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Nav from "../components/NavBar";
import SubNav from "../components/SubNav";
import ContentArea from "../components/ContentArea";
import { Box } from "@mui/material";
import axios from "axios";

function ProgressPage() {

  const [cards, setCards] = useState([]);
  // get a 
  const setInitialCards = async () => {
    const resp = await axios.get('https://sampleappapi.onrender.com/api/initial');

    if (resp.status != 200) {
      console.log('error');
      return;
    }
    console.log('returning data')
    setCards(resp.data.cards)
  }
  
  useEffect(() => {
    setInitialCards()
  }, []);
  console.log(cards);

  const navigate = useNavigate();
  return <>
    <SubNav />
    <ContentArea cards={cards}/>
  </>
}

export default ProgressPage;
