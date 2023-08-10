import React, {FC} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MapboxGL from '@rnmapbox/maps';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

type Props = {
  address: string;
  coordinates: number[];
};

const MapView: FC<Props> = ({address, coordinates}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <MapboxGL.MapView
          logoEnabled={false}
          scaleBarEnabled={false}
          style={styles.map}
          styleURL={MapboxGL.StyleURL.TrafficNight}>
          <MapboxGL.Camera
            centerCoordinate={coordinates}
            zoomLevel={10}
            animationDuration={0}
          />
          {!!coordinates && (
            <MapboxGL.PointAnnotation
              coordinate={coordinates}
              id="pointAnnotation">
              <LinearGradient
                colors={['#879CBE', '#46505C']}
                style={styles.pointAnnotation}
              />
            </MapboxGL.PointAnnotation>
          )}
        </MapboxGL.MapView>
        {address && (
          <View style={styles.street}>
            <TextWrapper style={styles.streetText}>{address}</TextWrapper>
          </View>
        )}
      </View>
    </View>
  );
};

export default MapView;
