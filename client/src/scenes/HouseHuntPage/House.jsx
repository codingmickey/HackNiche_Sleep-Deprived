import React, { useEffect, useState } from 'react';
import { Map } from '../../components/Map/Map';
import Navbar1 from 'scenes/navbar/Navbar1';
import houseImg from './house.svg';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
const House = () => {
  const navigate = useNavigate();

  const houses = [
    {
      city: 'Borivali',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      img: 'h1.jpeg',
      pos: [19.237188, 72.844139],
    },
    {
      city: 'Kandivali',
      img: 'h2.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      pos: [19.199821, 72.84259],
    },
    {
      city: 'Malad',
      img: 'h3.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      pos: [19.17709, 72.843239],
    },
    {
      img: 'h4.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      pos: [28.614454, 77.22689],
    },
    {
      img: 'h5.jpeg',
      pos: [28.603362, 77.190955],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
    },
    {
      img: 'h6.jpeg',
      pos: [28.660617, 77.21466],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
    },
    {
      img: 'h6.jpeg',
      pos: [22.258652, 71.192383],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
    },
  ];
  const City = [
    {
      city: 'Mumbai',
      pos: [19.237188, 72.844139],
    },
    {
      city: 'New Delhi',
      pos: [28.613939, 77.209023],
    },
    {
      city: 'Gujarat',
      pos: [22.258652, 71.192383],
    },
  ];

  const [details, setDetails] = useState({});
  const [view, setView] = useState(false);
  const [city, setCity] = useState(localStorage.getItem('city'));
  const [center, setCenter] = useState(
    City.find((item) => item.city == city).pos
  );

  const handleChange = (e) => {
    // setCity(e.target.value);
    // console.log(City.find((item) => item.city == e.target.value));
    // setCenter(City.find((item) => item.city == e.target.value).pos);
    localStorage.setItem('city', e.target.value);
    window.location.reload();
  };

  return (
    <>
      <Navbar1 />
      <div
        style={{
          height: '45vh',
          width: '100%',
          backgroundColor: '#F3963B',
          margin: '0',
          paddingLeft: '50px',
          paddingTop: '40px',
          paddingBottom: '40px',
          display: 'flex',
          justifyContent: 'space-around',
          alignContent: 'flex-start',
        }}
      >
        <div>
          <h1 style={{ color: 'white', fontSize: '5em', margin: '0' }}>
            <p style={{ margin: '0' }}>House Hunting</p>
          </h1>
          <h3
            style={{
              marginTop: '20px',
              color: 'white',
              maxWidth: '600px',
              fontSize: '1.25em',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            posuere leo at nunc tristique egestas. Mauris eu pharetra sem.
            Aliquam faucibus venenatis velit, eget aliquam purus feugiat eget.
          </h3>
        </div>
        <div>
          <img
            src={houseImg}
            height="300px"
            width="300px"
            alt=""
            style={{ marginLeft: '20px', marginTop: '50px' }}
          />
        </div>
      </div>
      <div className="mx-auto mt-32 w-[65%]">
        <div className="">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
              onChange={handleChange}
            >
              <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
              <MenuItem value={'New Delhi'}>New Delhi</MenuItem>
              <MenuItem value={'Gujarat'}>Gujarat</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="shadow-lg mt-5 mb-20 md:my-10">
          {/* <Map h="600px" houses={houses} City={City} center={center} /> */}

          <MapContainer
            center={center}
            zoom={12}
            scrollWheelZoom={false}
            attributionControl={false}
            style={{ height: '600px', width: '100wh', border: 'none' }}
          >
            <TileLayer
              // attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> Ad-Inventory'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {houses.map((item) => {
              return (
                <Marker position={item.pos}>
                  <Popup>
                    <div className="w-44 uppercase">
                      D-503 NBCC HEIGHTS, SEC-89 GURUGRAM,
                      {item.city} 122001
                      <br />
                      <div
                        className="cursor-pointer text-orange"
                        onClick={() => {
                          setView(true);
                          setDetails(item);
                        }}
                      >
                        View Details
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        {view && (
          <div className="bg-white rounded-lg shadow-lg py-3 px-5">
            <div className="grid cols-2 gap-20">
              <div className=""></div>
              <div className="">
                <img
                  src={require(`../../../public/assets/${details.img}`)}
                  className=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-10 h-5" />
    </>
  );
};

export default House;
