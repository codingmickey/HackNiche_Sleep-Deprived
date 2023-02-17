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
        <div className="inner-box" style={{ paddingLeft: '150px', paddingTop: '5px' }}>
          <h1>Live, Grow, Heal</h1>
          <h3 style={{ padding: '-20px 0px 0px 0px', fontWeight: 100 }}>
            <span style={{ color: '#eb774d', fontWeight: 300 }}>Army</span>
            -App{' '}
          </h3>
          <p style={{ maxWidth: '350px' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="inner-box">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.psdgraphics.com%2Ffile%2F2017%2Fsoldiers-silhouettes-png.png&f=1&nofb=1&ipt=f3d3c389240864165e3f377f716c1472fc5da11556ddeb304e2dbf6ad1b3b06a&ipo=images"
            alt=""
            height="300px"
            width="400px"
            style={{
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
