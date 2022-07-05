import { useLayoutEffect, useRef } from 'react';
import { Mesh } from 'three';
import MarkerPosition from './@types/MarkerPosition';

interface MarkerProps {
  marker: MarkerPosition;
}

const Marker = ({ marker }: MarkerProps) => {
  const markerRef = useRef<Mesh>(null!);

  // useLayoutEffect(() => {
  //   console.log(markerRef);
  // });

  return (
    <mesh name={marker.name} ref={markerRef} position={[marker.x, marker.y, marker.z]}>
      <capsuleGeometry args={[0.07, 0.05, 4, 8]}></capsuleGeometry>
      <meshPhongMaterial color={'blue'}></meshPhongMaterial>
    </mesh>
  );
};

export default Marker;
