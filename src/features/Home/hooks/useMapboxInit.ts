import {useEffect, useState} from 'react';
import {MAPBOX_DOWNLOADS_TOKEN} from 'react-native-dotenv';
import MapboxGL from '@rnmapbox/maps';

const useMapboxInit = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await MapboxGL.setAccessToken(MAPBOX_DOWNLOADS_TOKEN);
      } catch (e) {
        console.log((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {isLoading};
};

export default useMapboxInit;
