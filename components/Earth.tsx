import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, TextureLoader } from 'three';

const Earth = () => {
  const earth = useRef<Mesh>(null!);
  const earthTexture = useLoader(TextureLoader, 'earthmap1k.jpg');
  const Amsterdam = {
    city: 'Amsterdam',
    lat: 52.377956,
    lng: 4.89707,
  };

  const Rome = {
    city: 'Rome',
    lat: 41.9028,
    lng: 12.4964,
  };

  const Ottawa = {
    city: 'Ottawa',
    lat: 45.4215,
    lng: -75.6972,
  };

  const Sydney = {
    city: 'Sydney',
    lat: -33.8688,
    lng: 151.2093,
  };

  return (
    <mesh
      ref={earth}
      rotation={[0, -Math.PI / 2, 0]}
      // onDoubleClick={(e) => {
      //   drawMarker(Rome);
      //   drawMarker(Ottawa);
      //   drawMarker(Amsterdam);
      //   drawMarker(Sydney);
      // }}
    >
      <sphereGeometry args={[3, 32, 32]}></sphereGeometry>
      <meshPhongMaterial map={earthTexture}></meshPhongMaterial>
    </mesh>
  );
};

export default Earth;
