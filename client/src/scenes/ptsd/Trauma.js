import React from 'react';
import img from '../ptsd/trauma.svg';
import { Games } from './Games';
import { Reels } from './Reels';
export const Trauma = () => {
  return (
    <div>
      <div
        style={{
          height: '45vh',
          width: '100%',
          backgroundColor: '#F3963B',
          margin: '0',
          paddingLeft: '50px',
          paddingTop: '50px',
          display: 'flex',
          justifyContent: 'space-around',
          alignContent: 'flex-start'
        }}
      >
        <div>
          <h1 style={{ color: 'white', fontSize: '5em', margin: '0' }}>
            <p style={{ margin: '0' }}>
              PTSD <br></br>{' '}
            </p>
          </h1>
          <h1 style={{ margin: '0', color: 'white', maxWidth: '600px', fontSize: '1.25em' }}>
            Veterans suffering from PTSD experience intense responses to stimuli, including flashbacks, anxiety, and
            combative or protective behavior.
          </h1>
        </div>
        <div style={{ padding: '10px' }}>
          <img src={img} height="400px" width="300px" alt="" style={{ marginLeft: '50px' }} />
        </div>
      </div>
      <Reels />
      <Games />
    </div>
  );
};
