import React, {FC} from 'react';
import {Dimensions, FlatList, ListRenderItem} from 'react-native';
import TextWrapper from '../../../../components/TextWrapper';
import {ICar, IService} from '../../../../models/types';
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

const ServicesList: FC<ICar> = ({services, currency}) => {
  const renderListItem: ListRenderItem<IService> = ({item}) => {
    return <ServiceCard {...item} currency={currency} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.servicesContainer}
      columnWrapperStyle={styles.columnWrapper}
      data={services}
      renderItem={renderListItem}
      // onRefresh={refreshListItems}
      // refreshing={isRefreshing}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={keyExtractor}
      removeClippedSubviews
      bounces={false}
      getItemLayout={getItemLayout}
      numColumns={2}
    />
  );
};

export default ServicesList;
