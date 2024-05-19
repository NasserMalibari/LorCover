import React from "react";
import { Box } from '@mui/material';
import CardBox from "./CardBox";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function MainContent({champions, followers}) {

  const [value, setValue] = React.useState('all');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <Box sx={{display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  height: 'calc(100vh - 94px)',
  overflowY: 'auto',
  padding: '0px',
  paddingLeft: '10px',
  paddingTop: '25px'}}>
  <FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group">Show</FormLabel>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
      row
    >
      <FormControlLabel value="all" control={<Radio />} label="All" />
      <FormControlLabel value="completed" control={<Radio />} label="Completed" />
      <FormControlLabel value="uncompleted" control={<Radio />} label="Uncompleted" />
    </RadioGroup>
  </FormControl>
  <Box sx={{fontSize: '2em', fontWeight: 'bold', marginBottom: '10px'}}>
    Champions
  </Box>
  <Box
  sx={{
    // flexGrow: 1,
    // width: 'calc(100vw - 250px)',
    flexWrap: 'wrap',
    display: 'flex',
    gap: '10px',

  }}
  >
      {champions !== undefined && 
      champions.filter(card => {
        if (value === 'all') {
          return true;
        } else if (value === 'completed') {
          return card.completed;
        } else {
          return !card.completed;
        }
      })
      .map((card, index) => (
        <CardBox key={index} name={card.name} regions={card.regions} path={card.path} completed={card.completed}/>
      ))}
  </Box>
  <Box sx={{fontSize: '2em', fontWeight: 'bold', marginBottom: '10px'}}>
    Followers
  </Box>
  <Box
  sx={{
    flexWrap: 'wrap',
    display: 'flex',
    gap: '10px',

  }}
  >
      {followers !== undefined && followers.filter(card => {
        if (value === 'all') {
          return true;
        } else if (value === 'completed') {
          return card.completed;
        } else {
          return !card.completed;
        }
      })
      .map((card, index) => (
        <CardBox key={index} name={card.name} regions={card.regions} path={card.path} completed={card.completed}/>
      ))}
  </Box>
  </Box>
}

export default MainContent;
