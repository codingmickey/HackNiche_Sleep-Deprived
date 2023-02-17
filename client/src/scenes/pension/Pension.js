import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';

import img from '../pension/pension.svg';
import './Pension.css';
import Navbar1 from '../navbar/Navbar1';
export const Pension = () => {
  const posts = ['Field-Marshal', 'General', 'Lieutenant General', 'Major General', 'Brigadier', 'Major'];
  const [current, setCurrent] = useState(false);
  const [num, setNum] = React.useState();
  const [years, setyears] = React.useState();
  const [months, setmonths] = React.useState();
  const [ten, setTen] = useState(false);
  const [greatten, setgreatTen] = useState(false);
  const [pension, setPension] = useState();
  const handleChange = () => {
    console.log(current);
    setCurrent(!current);
    setgreatTen(false);
    setTen(false);
    if (years < 10) {
      setTen(true);
    } else if (years >= 10 && years <= 20) {
      setgreatTen(true);
      setPension((num / 2) * (years / 20));
      console.log(pension);
    } else {
      setgreatTen(true);
      setPension(num / 2);
      console.log(pension);
    }
  };
  const calc = () => {
    setPension((Number.num / 2) * (Number.years / 20));
    console.log(pension);
  };
  return (
    <div>
      <Navbar1 />
      <div
        style={{
          height: '50vh',
          width: '100%',
          backgroundColor: '#F3963B',
          margin: '0',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-around',
          alignContent: 'flex-start'
        }}
      >
        <div>
          <h1
            style={{
              color: 'white',
              fontSize: '5em',
              margin: '0',
              paddingTop: '30px'
            }}
          >
            <p style={{ margin: '0' }}>
              Pension <br></br> Calculator{' '}
            </p>
          </h1>
        </div>
        <div>
          <img src={img} height="300px" width="300px" alt="" style={{ marginLeft: '20px', marginTop: '50px' }} />
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        <div className="pen-box">
          <Typography sx={{ padding: '10px' }}>Post</Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={posts}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select Post" />}
          />
        </div>
        <div className="pen-box">
          <Typography sx={{ paddingBottom: '10px' }}>Total Qualifying Service</Typography>

          <TextField
            type="number"
            id="outlined-basic"
            label="Years"
            variant="outlined"
            onChange={(e) => setyears(e.target.value)}
            value={years}
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="Months"
            variant="outlined"
            onChange={(e) => setmonths(e.target.value)}
            style={{ marginTop: '10px' }}
            value={months}
          />
        </div>
        <div className="pen-box">
          <Typography sx={{ padding: '10px' }}>
            Sum of Last 10 months Emoluments: (Basic Pay + NPA ) (in Rs.)
          </Typography>
          <TextField
            type="number"
            id="outlined-basic"
            label="Enter number"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
            value={num}
          />
        </div>
        <div className="pen-box">
          <Button
            type="submit"
            variant="contained"
            sx={{
              color: 'white',
              backgroundColor: 'black',
              padding: '15px',
              width: '50%'
            }}
            onClick={handleChange}
          >
            Submit
          </Button>
        </div>
        <div
          className="pen-box"
          style={{
            display: ten ? 'block' : 'none',
            textAlign: 'center',
            fontSize: '2em'
          }}
        >
          <p>Sorry, you're not eligible for pension scheme</p>
        </div>
        <div
          className="pen-box"
          style={{
            display: greatten ? 'block' : 'none',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <p>The pension you're eligible for is as follows</p>
          <br></br>
          {pension && (
            <div>
              <p style={{ fontSize: '3em' }}>₹ {pension.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
