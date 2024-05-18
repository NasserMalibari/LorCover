import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import SubNav from "../components/SubNav";
import ContentArea from "../components/ContentArea";
import axios from "axios";
import CreateProfile from "../components/CreateProfile"

function ProgressPage() {

  const [riotID, setRiotID] = useState('');
  const [numCardsCompleted, setNumCardsCompleted] = useState(0);
  const [numGames, setNumGames] = useState(0);
  const [progressCode, setProgressCode] = useState('');

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // eg {'name': 'Naś', 'tag': 'OCE'}
  const startProfile = async (name, tag, numMatches) => {
    axios.get(`https://sampleappapi.onrender.com/api/lastMatchID?name=${name}&tag=${tag}&num_matches=${numMatches}`)
    .then((resp) => {
      console.log(resp.data);

      // set completed cards
      for (let card in resp.data.cards) {

      }

      setRiotID(`${name} #${tag}`);
    })
    .catch((err) => console.log('there was an error'))
    // const resp = await axios.get(`https://sampleappapi.onrender.com/api/lastMatchID?name=${name}&tag=${tag}`);
    // get last  match id
  }

  const loadProfile = (progressCode) => {
    // setProgressCode, setNumGames, setNumCardsCompleted, setRiotId
  }

  const updateProfile = () => {
    // fetch info from api given latest match

  }

  const [allChampions, setAllChampions] = useState({});
  const [allFollowers, setAllFollowers] = useState({});
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

    let newChampsObj = newChamps.reduce((acc, obj) => {
      acc[obj['cardCode']] = obj;
      return acc;
    }, {});

    setAllChampions(newChampsObj);
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

    let newFollowersObj = newFollowers.reduce((acc, obj) => {
      acc[obj['cardCode']] = obj;
      return acc;
    }, {});

    console.log(newFollowersObj);
    setAllFollowers(newFollowersObj);
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
    setChampions(Object.entries(allChampions)
    .filter(([, value]) => {
      for (let region in selectedRegions) {
        if (selectedRegions[region] && (value.regions).includes(regionToAbbrev[region])) {
          return true;
        }
      }
      return false;
    })
    .map(([, value]) => value)
  );

  setFollowers(Object.entries(allFollowers)
  .filter(([, value]) => {
    for (let region in selectedRegions) {
      if (selectedRegions[region] && (value.regions).includes(regionToAbbrev[region])) {
        return true;
      }
    }
    return false;
  })
  .map(([, value]) => value)
);
  }, [selectedRegions, allChampions, allFollowers])


  useEffect(() => {
    setInitialCards();
  }, []);

  return <>
    <SubNav riotID={riotID} numCardsCompleted={numCardsCompleted} numGames={numGames} progressCode={progressCode} openProfile={handleClickOpen}/>
    <ContentArea champions={champions} followers={followers} toggleRegions={toggleSelectedRegion} regions={selectedRegions}/>
    <CreateProfile open={open} handleClose={handleClose} startProfile={startProfile}/>
    </>
}

export default ProgressPage;
