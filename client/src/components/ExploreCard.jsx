import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function ExploreCard({ item }) {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <img
          src={require(`../../public/assets/${item.img}`)}
          className="h-52 w-fit mx-auto pt-2"
          alt="/"
        />
        {/* <CardMedia
          sx={{ maxHeight: 180 }}
          component="img"
          // height="140"
          image=
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {item.title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {item.data}
          </Typography>
          {/* <button className="border-[0.08rem] px-5 tracking-widest hover py-2 text- mt-4 hover:bg-slate-50 bg-white border-gray-400 rounded outline-none">
            Get Started
          </button> */}
          {/* <Button variant="outlined">Get Started</Button> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
