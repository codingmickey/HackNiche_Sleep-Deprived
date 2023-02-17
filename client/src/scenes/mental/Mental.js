import React, { useEffect } from 'react';
import img from '../mental/mental.svg';
import styled from 'styled-components';
import { Ptsd } from './Ptsd';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar1 from '../navbar/Navbar1';

export const Mental = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div>
      <Navbar1 />
      <div
        style={{
          height: '66vh',
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
              Mental <br></br> Health{' '}
            </p>
          </h1>
          <h3 style={{ margin: '0', color: 'white', maxWidth: '600px' }}>
            The most common mental health problems among personnel and veterans are depression, anxiety and alcohol
            problems. Most common experience is post-traumatic stress disorder (PTSD).
          </h3>
        </div>
        <div>
          <img src={img} height="300px" width="300px" alt="" style={{ marginLeft: '50px' }} />
        </div>
      </div>
      <div
        style={{
          padding: '40px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            sx={{
              color: '#9d552c',
              fontWeight: '100',
              fontFamily: 'Poppins',
              fontSize: '3px',
              paddingTop: '20px'
            }}
            title="Mental Health"
            subheader="All health matters"
          />
          <CardMedia
            component="img"
            height="154"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgcPtF3fYZzcu-c7vfbD-nb-dmp0N73jr6w&usqp=CAU"
            alt="Paella dish"
          />

          <CardContent>
            <Typography variant="body2" sx={{ color: '#2c645b' }}>
              Amazing mental health resources to combat anxiety, depression and much more.
            </Typography>

            <Typography
              sx={{
                paddingTop: '20px',
                textAlign: 'right',
                color: '#9d552c'
              }}
            >
              Learn More
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            sx={{
              color: '#9d552c',
              fontWeight: '100',
              fontFamily: 'Poppins',
              fontSize: '3px',
              paddingTop: '20px'
            }}
            title="PTSD Resources"
            subheader="Trauma Recovery Measures"
          />
          <CardMedia
            component="img"
            height="154"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpi2xgfu2yW6KT7xRYi031cfjTc5nqvEX1jQ&usqp=CAU"
            alt="Paella dish"
          />

          <CardContent>
            <Typography variant="body2" sx={{ color: '#2c645b' }}>
              Your battle with PTSD doesn't have to be alone.
            </Typography>
            <Link to="/ptsd">
              <Typography
                // component={Link}
                sx={{
                  paddingTop: '20px',
                  textAlign: 'right',
                  color: '#9d552c'
                }}
              >
                Learn More
              </Typography>
            </Link>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            sx={{
              color: '#9d552c',
              fontWeight: '100',
              fontFamily: 'Poppins',
              fontSize: '3px',
              paddingTop: '20px'
            }}
            title="Drug Abuse"
            subheader="It's not an addiction, just an ignorance measure"
          />
          <CardMedia
            component="img"
            height="154"
            image="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2019-12/shutterstock_405691723.jpg?itok=TkmDIDiZ"
            alt="Paella dish"
          />

          <CardContent>
            <Typography variant="body2" sx={{ color: '#2c645b' }}>
              Amazing mental health resources to combat anxiety, depression and much more.
            </Typography>
            <Typography
              sx={{
                paddingTop: '20px',
                textAlign: 'right',
                color: '#9d552c'
              }}
            >
              Learn More
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
