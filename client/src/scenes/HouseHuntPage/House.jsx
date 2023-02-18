import React, { useEffect, useState } from 'react';
import { Map } from '../../components/Map/Map';
import Navbar1 from '../navbar/Navbar1';
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
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const House = () => {
  const navigate = useNavigate();

  const houses = [
    {
      address: 'D-503 NBCC HEIGHTS, SEC-89 GURUGRAM, borivali,Mumbai - 400067',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      img: 'h1.jpeg',
      pos: [19.237188, 72.844139],
      price: '1.60 Cr',
      flat: '2 bhk flats',
      head: 'Sheetal Regaila'
    },
    {
      address: 'B-503 NBCC HEIGHTS, SEC-89 GURUGRAM, Kandivali , Mumbai - 400069',
      img: 'h2.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      pos: [19.199821, 72.84259],
      price: '1.60 Cr',
      flat: '2 bhk flats',
      head: 'Sheetal Regaila'
    },
    {
      address: 'C-503 NBCC HEIGHTS, SEC-89 GURUGRAM, Malad , Mumbai - 401269',
      img: 'h3.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      pos: [19.17709, 72.843239],
      price: '1.60 Cr',
      flat: '2 bhk flats',
      head: 'Sheetal Regaila'
    },
    {
      address: 'E-503 NBCC HEIGHTS, SEC-89 GURUGRAM, Delhi - 401269',
      img: 'h4.jpeg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      pos: [28.614454, 77.22689],
      price: '1.60 Cr',
      flat: '2 bhk flats',
      head: 'Sheetal Regaila'
    },
    {
      address: 'Z-Wing NBCC HEIGHTS, SEC-89 GURUGRAM, Delhi - 101269',
      img: 'h5.jpeg',
      pos: [28.603362, 77.190955],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      price: '1.60 Cr',
      flat: '2 bhk flats',
      head: 'Sheetal Regaila'
    },
    {
      address: 'F-wing NBCC HEIGHTS, SEC-89 GURUGRAM, Delhi - 111269',
      img: 'h6.jpeg',
      pos: [28.660617, 77.21466],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      price: '1.60 Cr',
      flat: '2 bhk flats',
      head: 'Sheetal Regaila'
    },
    {
      address: 'F-wing NBCC HEIGHTS, SEC-89 GURUGRAM, GUJarAt - 320269',
      img: 'h6.jpeg',
      pos: [22.258652, 71.192383],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas',
      price: '1.60 Cr',
      flat: '2 bhk flats',
      head: 'Sheetal Regaila'
    }
  ];
  const City = [
    {
      city: 'Mumbai',
      pos: [19.237188, 72.844139]
    },
    {
      city: 'New Delhi',
      pos: [28.613939, 77.209023]
    },
    {
      city: 'Gujarat',
      pos: [22.258652, 71.192383]
    }
  ];

  const [details, setDetails] = useState({});
  const [view, setView] = useState(false);
  const [city, setCity] = useState(localStorage.getItem('city'));
  const [center, setCenter] = useState(City.find((item) => item.city == city).pos);

  const handleChange = (e) => {
    // setCity(e.target.value);
    // console.log(City.find((item) => item.city == e.target.value));
    // setCenter(City.find((item) => item.city == e.target.value).pos);
    localStorage.setItem('city', e.target.value);
    window.location.reload();
  };

  const sendMail = async () => {
    const response = await fetch(`http://localhost:3001/auth/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'varunvekaria@gmail.com',
        subject: 'Enquiry received for House Reallocation',
        html: '<h1>New query received for your house! </h1><p>Hi, I am interested in the house by looking at the pictures.</p> <p>Thanks</p><p>Name: Kartik</p>WhatsApp me at: https://wa.me/919619247188</p>'
        // attachments: ''
      })
    });
    const data = await response.json();
    console.log(data);
    const response1 = await fetch(`http://localhost:3001/auth/sms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: '+919987772704',
        body: 'New Room Applicant Alert: Hi, I am interested in your house. Name: Kartik Phone: 9619247188, WhatsApp me at: https://wa.me/919619247188. Regards, Sainik Suvidha'
        // attachments: ''
      })
    });

    const data1 = await response1.json();
    console.log(data1);
    navigate('/success');
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
          alignContent: 'flex-start'
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
              fontSize: '1.25em'
            }}
          >
            For army personnel shifting is a part of life. Thus a house-hunt feature makes it easier for them to find
            houses.
          </h3>
        </div>
        <div>
          <img src={houseImg} height="300px" width="300px" alt="" style={{ marginLeft: '20px', marginTop: '50px' }} />
        </div>
      </div>
      <div className="mx-auto mt-14 w-[65%]">
        <div className="" id="top">
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
        {view && (
          <div className="bg-white rounded-lg shadow-lg mt-5 py-3 px-5 uppercase">
            <div className="grid grid-cols-2 w-full">
              {/* <div className="grid grid-cols-2 w-full border-grey border-[0.1rem] shadow-md py-2 px-5 rounded-lg"> */}
              <div className="mt-5">
                <div className="font-medium text-xl">{details.head}</div>
                <div className="text- w-[80%] mt-2 tracking-wider">{details.address}</div>
                <div className="mt-2  w-[80%] tracking-wider">{details.flat}</div>
                <div className="mt-2 font-semibold w-[80%] tracking-wider">Price: {details.price}</div>
                <div className="mt-2 ">
                  <button
                    onClick={sendMail}
                    className="px-5 py-1 bg-blue-500 text-white hover:bg-blue-400 text-lg rounded-lg"
                  >
                    Send Details
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={require(`../../../public/assets/${details.img}`)} className="" />
              </div>
            </div>
          </div>
        )}
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
                      {item.address}
                      <br />
                      <div
                        className="cursor-pointer text-orange"
                        onClick={() => {
                          setView(true);
                          setDetails(item);
                          var elem = document.getElementById('top');
                          elem.scrollIntoView();
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
        <div className=" uppercase">
          {houses.map((item) => {
            return (
              <div className="grid grid-cols-2 w-full border-grey border-[0.1rem] shadow-md py-4 px-5 rounded-lg mt-5">
                {/* <div className="grid grid-cols-2 w-full mt-5 shadow-sm"> */}
                <div className="mt-5">
                  <div className="font-medium text-xl">{item.head}</div>
                  <div className="text- w-[80%] mt-2 tracking-wider">{item.address}</div>
                  <div className="mt-2  w-[80%] tracking-wider">{item.flat}</div>
                  <div className="mt-2 font-semibold w-[80%] tracking-wider">Price: {item.price}</div>
                  <div className="mt-4">
                    <button
                      onClick={sendMail}
                      className="px-5 py-1 bg-blue-500 text-white hover:bg-blue-400 text-lg rounded-lg"
                    >
                      Send Details
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img src={require(`../../../public/assets/${item.img}`)} className="w-80" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 h-5" />
    </>
  );
};

export default House;
