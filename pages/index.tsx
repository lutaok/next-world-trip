import type { NextPage } from 'next';
import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import CameraControls from '../components/CameraControls';
import MyScene from '../components/MyScene';
import useStore from '../store/useStore';
import styles from '../styles/Home.module.css';
import MapLocation from '../components/@types/MapLocation';
import MarkerCardList from '../components/MarkerCardList/MarkerCardList';

const Home: NextPage = () => {
  const setCityInStore = useStore((state) => state.addCity);
  const fetchRandomCity = async () => {
    const randomCity = await (await fetch('/api/randomCity')).json();

    const newLocation: MapLocation = {
      city: randomCity.city,
      lat: parseFloat(randomCity.latt),
      lng: parseFloat(randomCity.longt),
    };

    setCityInStore(newLocation);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next World Trip</title>
        <meta name="description" content="Randomly choose your next world trip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="canvas-container" className={styles.canvasContainer}>
        <Canvas>
          <Suspense>
            <MyScene></MyScene>
          </Suspense>
          <CameraControls />
        </Canvas>
      </div>
      <div className={styles.section}>
        <button className={styles.button} onClick={() => fetchRandomCity()}>
          Leap of Faith
        </button>
      </div>
      <MarkerCardList></MarkerCardList>
    </div>
  );
};

export default Home;
