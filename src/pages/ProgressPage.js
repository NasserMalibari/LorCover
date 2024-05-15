import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Nav from "../components/NavBar";
import SubNav from "../components/SubNav";
import ContentArea from "../components/ContentArea";
import { Box } from "@mui/material";
import axios from "axios";

function ProgressPage() {

  const [champions, setChampions] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState({
    'Runeterra': true,
    'Bandle City': true,
    'Shadow Isles': true,
    'Piltover & Zaun': true,
    'Demacia': true,
    'Ionia': true,
    'Targon': true,
    'Noxus': true,
    'Freljord': true,
    'Bilgewater': true,
    'Shurima': true
  });
  
  
  const setInitialCards = async () => {
    // const resp = await axios.get('http://127.0.0.1:5000/api/initial');
    const resp = await axios.get('https://sampleappapi.onrender.com/api/initial');

    if (resp.status != 200) {
      console.log('error');
      return;
    }
    let newChamps = []

    for (let region in selectedRegions) {
      resp.data[region]['champions'].forEach(card => {
        newChamps.push(card);
      })
    }
    // sort by name then cost
    newChamps.sort((a, b) => a.name > b.name);
    newChamps.sort((a, b) => a.cost > b.cost);
    setChampions(newChamps);

    let newFollowers = []

    for (let region in selectedRegions) {
      resp.data[region]['rest'].forEach(card => {
        newFollowers.push(card);
      })
    }
    // sort by name then cost
    newFollowers.sort((a, b) => a.name > b.name);
    newFollowers.sort((a, b) => a.cost > b.cost);
    setFollowers(newFollowers);



    // setCards(resp.data);
  }

  useEffect(() => {
    setInitialCards();
  }, []);
  // console.log(cards);

  const navigate = useNavigate();
  return <>
    <SubNav />
    <ContentArea champions={champions} followers={followers}/>
  </>
}

export default ProgressPage;
