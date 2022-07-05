import { extend, Object3DNode, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef<OrbitControls>(null!);
  useFrame((state) => {
    controls.current.update();
  });
  return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={true} maxPolarAngle={Math.PI} minPolarAngle={0} />;
};

export default CameraControls;
