import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Nav from "../components/NavBar";
import SubNav from "../components/SubNav";
import ContentArea from "../components/ContentArea";
import { Box } from "@mui/material";
import axios from "axios";

function ProgressPage() {

  const [allChampions, setAllChampions] = useState([]);
  const [allFollowers, setAllFollowers] = useState([]);
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

  const regionToAbbrev = {
    'Runeterra': 'RU',
    'Bandle City': 'BC',
    'Shadow Isles': 'SI',
    'Piltover & Zaun': 'PZ',
    'Demacia': 'DE',
    'Ionia': 'IO',
    'Targon': 'MT',
    'Noxus': 'NX',
    'Freljord': 'FR',
    'Bilgewater': 'BW',
    'Shurima': 'SH'
  }

  
  const setInitialCards = async () => {
    // const resp = await axios.get('http://127.0.0.1:5000/api/initial');
    const resp = await axios.get('https://sampleappapi.onrender.com/api/initial');

    if (resp.status !== 200) {
      console.log('error');
      return;
    }
    let newChamps = []

    for (let region in selectedRegions) {
      resp.data[region]['champions'].forEach(card => {
        card['completed'] = false;
        newChamps.push(card);
      })
    }
    // sort by name then cost
    newChamps.sort((a, b) => a.name > b.name);
    newChamps.sort((a, b) => a.cost > b.cost);

    // remove duplicates
    newChamps = newChamps.filter(function(item, pos, arr){
      return pos === 0 || item.name !== arr[pos-1].name;
    });

    setAllChampions(newChamps);
    setChampions(newChamps);

    let newFollowers = []
    for (let region in selectedRegions) {
      resp.data[region]['rest'].forEach(card => {
        card['completed'] = false;
        newFollowers.push(card);
      })
    }
    // sort by name then cost
    newFollowers.sort((a, b) => a.name > b.name);
    newFollowers.sort((a, b) => a.cost > b.cost);

    // remove duplicates
    newFollowers = newFollowers.filter(function(item, pos, arr){
      return pos === 0 || item.name !== arr[pos-1].name;
    });

    setAllFollowers(newFollowers);
    setFollowers(newFollowers);
  }

  // input region ('Ionia'|'Noxus', ...)
  // toggles setSelectedRegions
  const toggleSelectedRegion = (region) => {
    setSelectedRegions(prevSelected => {
      return {
        ...prevSelected,
        [region]: !prevSelected[region]
      };
    });
  };

  useEffect(() => {
    // update shown cards
    setChampions(allChampions.filter(card => {
      const cardRegions = card.regions;
      for (let region in selectedRegions) {
        if (selectedRegions[region] && cardRegions.includes(regionToAbbrev[region])) {
          return true;
        }
      }

      return false;
    }));

    setFollowers(allFollowers.filter(card => {
      const cardRegions = card.regions;
      for (let region in selectedRegions) {
        if (selectedRegions[region] && cardRegions.includes(regionToAbbrev[region])) {
          return true;
        } 
      }

      return false;
    }));

  }, [selectedRegions, allChampions, allFollowers])


  useEffect(() => {
    setInitialCards();
  }, []);

  return <>
    <SubNav />
    <ContentArea champions={champions} followers={followers} toggleRegions={toggleSelectedRegion} regions={selectedRegions}/>
  </>
}

export default ProgressPage;
