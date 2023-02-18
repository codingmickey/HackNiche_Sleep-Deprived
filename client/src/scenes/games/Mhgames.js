import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar1 from '../navbar/Navbar1';
import '../pension/Pension.css';
export const Mhgames = () => {
  //   const [stateyes, setYesstate] = useState(false);
  //   const [stateNo, setNostate] = useState(false);
  //   const [btnClass1, setBtnClass1] = useState(false);
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [btnColor1, setBtnColor1] = useState('black');
  const [btnColor2, setBtnColor2] = useState('black');
  const [btnColor3, setBtnColor3] = useState('black');
  const [btnColor4, setBtnColor4] = useState('black');
  const [btnColor5, setBtnColor5] = useState('black');
  const [btnColor6, setBtnColor6] = useState('black');
  const [btnColor7, setBtnColor7] = useState('black');
  const [btnColor8, setBtnColor8] = useState('black');
  const [btnColor9, setBtnColor9] = useState('black');
  const [btnColor10, setBtnColor10] = useState('black');

  const [first, setfirst] = useState(false);
  //   const handleChange = () => {
  //     setYesstate(!stateyes);
  //   };
  return (
    <div>
      <Navbar1 />
      <div
        style={{
          height: '40vh',
          width: '100%',
          backgroundColor: '#138808',
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
            <p style={{ margin: '0', textAlign: 'center' }}>
              PTSD <br></br>ANALYSIS
            </p>
          </h1>
        </div>
      </div>
      <div className="pen-box" style={{ padding: '20px' }}>
        <Typography sx={{ fontSize: '1.15em' }}>
          1. Have you had nightmares about the event or thought about the event when you did not want to?
        </Typography>
        <div className="">
          <Button
            onClick={() => {
              btnColor1 === 'black' ? setBtnColor1('green') : setBtnColor1('black');
              setBtnColor2('black');
              setYes(yes + 1);
            }}
            variant="contained"
            sx={{
              padding: '15px',
              margin: '20px',
              color: 'white',
              backgroundColor: btnColor1
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              btnColor2 === 'black' ? setBtnColor2('red') : setBtnColor2('black');
              setBtnColor1('black');
            }}
            variant="contained"
            sx={{
              padding: '15px',
              margin: '20px',
              color: 'white',
              backgroundColor: btnColor2
              // display: stateyes ? 'none' : 'absolute'
            }}
          >
            No
          </Button>
        </div>
      </div>
      <div className="pen-box" style={{ padding: '20px' }}>
        <Typography sx={{ fontSize: '1.15em' }}>
          2. Tried hard not to think about the event or went out of your way to avoid situations that bring back
          memories?
        </Typography>
        <div className="">
          <Button
            onClick={() => {
              btnColor3 === 'black' ? setBtnColor3('green') : setBtnColor3('black');
              setBtnColor4('black');
              setYes(yes + 1);
            }}
            variant="contained"
            sx={{ padding: '15px', margin: '20px', color: 'white', backgroundColor: btnColor3 }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              btnColor4 === 'black' ? setBtnColor4('red') : setBtnColor4('black');
              setBtnColor3('black');
            }}
            variant="contained"
            sx={{ padding: '15px', margin: '20px', color: 'white', backgroundColor: btnColor4 }}
          >
            No
          </Button>
        </div>
      </div>
      <div className="pen-box" style={{ padding: '20px' }}>
        <Typography sx={{ fontSize: '1.15em' }}>3. Been constantly on guard watchful or easily startled?</Typography>
        <div className="">
          <Button
            onClick={() => {
              btnColor5 === 'black' ? setBtnColor5('green') : setBtnColor5('black');
              setBtnColor6('black');
              setYes(yes + 1);
            }}
            variant="contained"
            sx={{ padding: '15px', margin: '20px', color: 'white', backgroundColor: btnColor5 }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              btnColor6 === 'black' ? setBtnColor6('red') : setBtnColor6('black');
              setBtnColor5('black');
            }}
            variant="contained"
            sx={{ padding: '15px', margin: '20px', color: 'white', backgroundColor: btnColor6 }}
          >
            No
          </Button>
        </div>
      </div>
      <div className="pen-box" style={{ padding: '20px' }}>
        <Typography sx={{ fontSize: '1.15em' }}>
          4. Felt numb or detached from people, activities or your surroundings?
        </Typography>
        <div className="">
          <Button
            onClick={() => {
              btnColor7 === 'black' ? setBtnColor7('green') : setBtnColor7('black');
              setBtnColor8('black');
              setYes(yes + 1);
            }}
            variant="contained"
            sx={{ padding: '15px', margin: '20px', color: 'white', backgroundColor: btnColor7 }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              btnColor8 === 'black' ? setBtnColor8('red') : setBtnColor8('black');
              setBtnColor7('black');
            }}
            variant="contained"
            sx={{ padding: '15px', margin: '20px', color: 'white', backgroundColor: btnColor8 }}
          >
            No
          </Button>
        </div>
      </div>
      <div className="pen-box" style={{ padding: '20px' }}>
        <Typography sx={{ fontSize: '1.15em' }}>
          5. Felt guilty or unable to stop blaming yourself or others for the event or any problems which are caused
          recently?
        </Typography>
        <div className="">
          <Button
            onClick={() => {
              btnColor9 === 'black' ? setBtnColor9('green') : setBtnColor9('black');
              setBtnColor10('black');
              setYes(yes + 1);
            }}
            variant="contained"
            sx={{ padding: '15px', margin: '20px', color: 'white', backgroundColor: btnColor9 }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              btnColor10 === 'black' ? setBtnColor10('red') : setBtnColor10('black');
              setBtnColor9('black');
            }}
            variant="contained"
            sx={{ padding: '15px', margin: '20px', color: 'white', backgroundColor: btnColor10 }}
          >
            No
          </Button>
        </div>
      </div>
      <Link to={yes >= 3 ? '/game2' : '/game1'}>
        <Button
          variant="contained"
          sx={{
            padding: '15px',
            margin: '20px',
            color: 'white',

            textAlign: 'center',
            backgroundColor: 'orange'
          }}
          fullWidth
        >
          Submit
        </Button>
      </Link>
    </div>
  );
};
