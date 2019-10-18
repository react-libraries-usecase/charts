import React, { useState } from "react";
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 1200,
    height: 800,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={'pk.eyJ1Ijoic2F5amV5aGkiLCJhIjoiY2sxcWZwMDZ5MDFsYjNubWxhajI5MXBoYSJ9.5jmjYYPLkFo5_CRb_k3kHw\n'}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};


export default Map;
