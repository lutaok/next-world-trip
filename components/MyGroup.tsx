import { useState } from 'react';
import useStore from '../store/useStore';

import Earth from './Earth';
import Marker from './Marker';
import MarkerPosition from './@types/MarkerPosition';
import MapLocation from './@types/MapLocation';

const degreeToRadians = (degree: number): number => {
  return (degree * Math.PI) / 180;
};

const MyGroup = () => {
  const [markers, setMarkers] = useState<MarkerPosition[]>([]);

  const drawMarker = (location: MapLocation) => {
    const markerPosition = {
      name: location.city,
      x: 0,
      y: 0,
      z: 0,
    };
    markerPosition.y = Math.sin(degreeToRadians(location.lat)) * 3;
    const r = Math.cos(degreeToRadians(location.lat)) * 3;
    markerPosition.x = Math.sin(degreeToRadians(location.lng)) * r;
    markerPosition.z = Math.cos(degreeToRadians(location.lng)) * r;
    const alreadyMarked = markers.find((mark) => {
      if (mark.name === markerPosition.name) {
        return true;
      }
    });
    if (!alreadyMarked) {
      setMarkers((prevMarkers) => [...prevMarkers, markerPosition]);
    }
  };

  useStore((state) => {
    if (state?.lastCity?.city) {
      drawMarker(state.lastCity);
    }
  });

  return (
    <>
      <Earth />
      {markers.length > 0 && markers.map((marker) => <Marker key={`marker_${marker.name}`} marker={marker} />)}
    </>
  );
};

export default MyGroup;
