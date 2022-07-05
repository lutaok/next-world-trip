import { useThree } from '@react-three/fiber';

import MyGroup from './MyGroup';

const MyScene = () => {
  const { camera } = useThree();
  camera.position.z = 6;

  return (
    <>
      <directionalLight />
      <ambientLight intensity={1} />
      <axesHelper></axesHelper>
      <MyGroup />
    </>
  );
};

export default MyScene;
