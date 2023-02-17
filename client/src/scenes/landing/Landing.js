import React from 'react';
import DrawerAppBar from './DrawerAppBar';
import './Landing.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
export const Landing = () => {
  return (
    <div>
      <DrawerAppBar />
      <div className="box" style={{ bottom: '0', display: 'relative' }}>
        <div className="inner-box" style={{ paddingLeft: '150px', paddingTop: '50px' }}>
          <h1 style={{ fontSize: '2em' }}>Live, Grow, Heal</h1>
          <h3 style={{ padding: '-20px 0px 0px 0px', fontWeight: 100 }}>
            An
            <span style={{ color: '#eb774d', fontWeight: 300, fontSize: '1.5em' }}> Army</span>
            -App{' '}
          </h3>
          <p style={{ paddingTop: '40px', maxWidth: '300px', fontSize: '1.25em' }}>
            Military service is difficult, demanding and dangerous. But returning to civilian life also poses challenges
            for the men and women who have served in the armed forces
          </p>
        </div>
        <div className="inner-box">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.psdgraphics.com%2Ffile%2F2017%2Fsoldiers-silhouettes-png.png&f=1&nofb=1&ipt=f3d3c389240864165e3f377f716c1472fc5da11556ddeb304e2dbf6ad1b3b06a&ipo=images"
            alt=""
            height="380px"
            width="600px"
            style={{
              margin: '0',
              borderRadius: '20%',
              backgroundColor: '#f6f6f6'
            }}
          ></img>
        </div>
      </div>
      <Stack direction="row">
        <Button
          className="box"
          component={Link}
          to="/login"
          sx={{
            padding: '20px',

            backgroundColor: '#138808',
            color: '#fff'
          }}
          variant="contained"
          fullWidth
        >
          Signup/Login
        </Button>
      </Stack>
    </div>
  );
};
