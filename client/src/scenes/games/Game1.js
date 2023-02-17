/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Navbar1 from '../navbar/Navbar1';

export const Game1 = () => {
  return (
    <>
      <Navbar1 />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '40px'
        }}
      >
        <div>
          <h1 style={{ fontSize: '3em', paddingBottom: '20px' }}>Color Junction (TETRIS)</h1>
          <h3></h3>
        </div>
        <div>
          <iframe src="https://fugamaru.com/projects/ColorJunction/" height="264" width="244" frameborder="0" />
        </div>
      </div>
    </>
  );
};
