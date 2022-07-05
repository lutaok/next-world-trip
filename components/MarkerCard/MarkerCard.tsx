import MapLocation from '../@types/MapLocation';
import styles from './MarkerCard.module.css';

interface MarkerCardProps {
  city: MapLocation;
}

const MarkerCard = ({ city }: MarkerCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cityName}>{city.city}</div>
      <div className={styles.cityInfo}>
        <div>LNG: {city.lng}</div>
        <div>LAT: {city.lat}</div>
      </div>
    </div>
  );
};

export default MarkerCard;
