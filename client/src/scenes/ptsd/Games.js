import React from 'react';
import './Reels.css';
import img from '../ptsd/games.svg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export const Games = () => {
  return (
    <div>
      <div className="trauma-card">
        {/* <h1>Lets build A ig reels clone</h1> */}
        <div style={{ padding: '10px' }}>
          <img src={img} height="400px" width="300px" alt="" style={{ marginLeft: '50px' }} />
        </div>
        <div style={{ margin: '20px', paddingTop: '20px' }}>
          <h1 style={{ fontSize: '4em' }}>Let's take a quiz!</h1>
          <p style={{ fontSize: '1.25em', maxWidth: '600px' }}>
            <br></br>
            <br></br>
            Certain games have proven to be helpful in reducing anxiety and coping up with the trauma that follows
            after.
          </p>
          <Link to="/ptsd-game">
            <Button
              variant="contained"
              sx={{
                color: 'white',
                backgroundColor: 'green',
                height: '30px',
                width: '30%',
                padding: '20px',
                marginTop: '20px'
              }}
            >
              Let's Start
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
