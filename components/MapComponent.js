"use client"
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import '../utils/leafletIcon';
import * as ELG from "esri-leaflet-geocoder";



const center = [51.505, -0.09]; 

const EsriLeafletGeocoder = () => {
  const map = useMap();

  useEffect(() => {
    const searchControl = ELG.geosearch().addTo(map);

    const results = L.layerGroup().addTo(map);

    searchControl.on('results', function (data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }, [map]);

  return null;
};

const MapComponent = () => {
  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        attribution='Map tiles by <a href="http://carto.com/attributions">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under ODbL.'
      />
      <Marker position={center}>
        <Popup>
          Our location
        </Popup>
      </Marker>
      <EsriLeafletGeocoder />
    </MapContainer>
  );
};

export default MapComponent;
