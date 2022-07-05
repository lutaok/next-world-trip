import useStore from '../../store/useStore';
import MarkerCard from '../MarkerCard/MarkerCard';
import styles from './MarkerCardList.module.css';

const MarkerCardList = () => {
  const cities = useStore((state) => state.cities);

  return <div className={styles.cardGrid}>{cities.length > 0 && cities.map((city) => <MarkerCard key={`marker_card_${city.city}`} city={city} />)}</div>;
};

export default MarkerCardList;
