import React, {useMemo, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SceneMap, SceneRendererProps} from 'react-native-tab-view';
import {ICar} from '../../../models/types';
import ServicesList from '../components/ServicesList';

type SceneProps = {
  route: any;
} & Omit<SceneRendererProps, 'layout'>;

const renderCarItem = ({route}: SceneProps) => {
  return <ServicesList {...route} />;
};

const useTabView = (listItems: ICar[]) => {
  const [index, setIndex] = useState(0);
  const {width} = useWindowDimensions();

  const routesScenes = listItems.reduce((acc, car) => {
    return {...acc, [car.id]: renderCarItem};
  }, {});

  const renderScene = SceneMap(routesScenes);

  const navigationState = useMemo(
    () => ({
      index,
      routes: listItems.map(car => ({...car, key: car.id.toString()})),
    }),
    [index, listItems],
  );

  const initialLayout = {width};

  return {
    navigationState,
    renderScene,
    setIndex,
    initialLayout,
  };
};

export default useTabView;
