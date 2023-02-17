import React from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const Map = ({ h = '750px', houses, center }) => {
  // const center = [28.4358935, 76.9225288];

  // 76.9215124 77.03331
  // const position = [28.4358935, 76.9225288];
  return (
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
              D-503 NBCC HEIGHTS,
              <br /> SEC-89 GURUGRAM GURGAON,
              <br /> HARYANA 122001
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
