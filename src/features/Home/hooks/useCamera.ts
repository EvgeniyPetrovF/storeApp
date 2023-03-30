import {useEffect, useRef, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import MapboxGL from '@rnmapbox/maps';

const CITY_LEVEL_ZOOM = 12;

const PERMISSION_REQUEST_CONFIG = {
  ANDROID: {
    title: 'Запрос доступа к вашей геопозиции',
    message:
      'Для автоматического позиционирования, нам требуется ваше разрешение на получение данных о вашем местонахождении',
    buttonPositive: 'ОК',
    buttonNegative: 'Отмена',
  },
};

const useCamera = (pointCoordinates: number[] | null) => {
  const cameraRef = useRef<MapboxGL.Camera>(null);
  // Instant ref invokation doesn't work so here is the hack for it
  const [hack, setHack] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHack(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (!hack || !pointCoordinates) {
      return;
    }

    setCamera(pointCoordinates);
  }, [pointCoordinates, hack]);

  const setCamera = (coordinates: number[]) => {
    cameraRef.current?.setCamera({
      centerCoordinate: coordinates,
      zoomLevel: CITY_LEVEL_ZOOM,
    });
  };

  useEffect(() => {
    if (!hack || Platform.OS !== 'android') {
      return;
    }

    (async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PERMISSION_REQUEST_CONFIG.ANDROID,
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return;
      }
    })();
  }, [hack]);

  return {cameraRef};
};

export default useCamera;
