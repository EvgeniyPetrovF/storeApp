import React, {FC, useCallback} from 'react';
import {Dimensions, FlatList, ListRenderItem, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  GasStation,
  GasStationFilled,
  ParkingSpot,
  Repair,
  SecurityCamera,
} from '../../../../assets/images/svg-icons';
import TextWrapper from '../../../../components/TextWrapper';
import {colors} from '../../../../constants';
import {StackParamList} from '../../../../models/navigation';
import {ICar, IService} from '../../../../models/types';
import useServices from '../../hooks/useServices';
import LargeServiceCard from '../LargeServiceCard';
import MapView from '../MapView';
import ServiceCard from '../ServiceCard';
import {styles} from './styles';

export const serviceCardWidth = Dimensions.get('window').width * 0.45;

const ListEmptyComponent: FC = () => {
  return <TextWrapper>No items</TextWrapper>;
};

const keyExtractor = (item: IService) => {
  return `${item.id}`;
};

const getItemLayout = (_: unknown, index: number) => {
  return {
    length: serviceCardWidth,
    offset: serviceCardWidth * index,
    index,
  };
};

const ServicesList: FC<ICar> = ({
  services,
  currency,
  id,
  street,
  house,
  coordinates,
  itemsToFix,
  amountOfFuel,
  fuelCapacity,
}) => {
  const {servicesList, isRefreshing, refreshServices} = useServices({
    services,
    carId: id,
  });

  const {navigate} = useNavigation<NavigationProp<StackParamList>>();
  const navigateToDetails = () => {
    navigate('Details', {id});
  };

  const carAddress = [street, house].join(', ');
  const renderMap = useCallback(() => {
    return <MapView address={carAddress} coordinates={coordinates} />;
  }, [carAddress, coordinates]);

  const renderItem: ListRenderItem<IService> = ({item}) => {
    switch (item.serviceType) {
      case 'fuel':
        return (
          <LargeServiceCard
            {...item}
            currency={currency}
            bgColors={bgColors}
            warningText="Мало топлива"
            onPress={navigateToDetails}
            icon={<GasStation width="30" height="30" />}>
            <View>
              <Progress.Bar
                progress={amountOfFuel / fuelCapacity}
                color={colors.midGray}
                unfilledColor={colors.athensGray}
                borderWidth={0}
              />
              <TextWrapper style={styles.fuelToFill}>
                + {fuelCapacity - amountOfFuel} л
              </TextWrapper>
            </View>
          </LargeServiceCard>
        );
      case 'maintenance':
        return (
          <LargeServiceCard
            {...item}
            currency={currency}
            bgColors={['#fdfffc', '#f9fef6']}
            warningText="Через 937 км"
            onPress={navigateToDetails}
            icon={<Repair width="30" height="30" />}>
            <TextWrapper style={styles.maintenanceItems} numberOfLines={2}>
              {itemsToFix.join(', ')}
            </TextWrapper>
          </LargeServiceCard>
        );
      case 'fines':
        return (
          <ServiceCard
            {...item}
            onPress={navigateToDetails}
            currency={currency}
            icon={<SecurityCamera fill={colors.lightBlue} />}
          />
        );
      case 'parking':
        return (
          <ServiceCard
            {...item}
            onPress={navigateToDetails}
            currency={currency}
            icon={<ParkingSpot fill={colors.lightGreen} />}
          />
        );
      case 'gasStation':
        return (
          <ServiceCard
            {...item}
            onPress={navigateToDetails}
            currency={currency}
            icon={<GasStationFilled fill={colors.lightPurple} />}
          />
        );
      default:
        return <ServiceCard {...item} currency={currency} />;
    }
  };

  return (
    <FlatList
      contentContainerStyle={styles.servicesContainer}
      columnWrapperStyle={styles.columnWrapper}
      data={servicesList}
      renderItem={renderItem}
      onRefresh={refreshServices}
      refreshing={isRefreshing}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      numColumns={2}
      ListHeaderComponent={renderMap}
    />
  );
};

export default ServicesList;

const bgColors = ['white', '#f1fbff'];
