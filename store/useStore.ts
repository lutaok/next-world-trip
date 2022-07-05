import create from 'zustand';
import MapLocation from '../components/@types/MapLocation';

interface InitialStore {
  lastCity: MapLocation | null;
  cities: MapLocation[];
  setCity: (city: MapLocation) => void;
  addCity: (city: MapLocation) => void;
}

const useStore = create<InitialStore>((set) => ({
  lastCity: null,
  cities: [],
  setCity: (city: MapLocation) => set({ lastCity: city }),
  addCity: (city: MapLocation) => {
    set(({ cities: oldCities }) => ({ cities: [...oldCities, city] }));
    set({ lastCity: city });
  },
}));

export default useStore;
