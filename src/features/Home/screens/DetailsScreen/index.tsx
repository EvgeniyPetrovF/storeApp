import React, {FC, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import {ArrowDown} from '../../../../assets/images/svg-icons';
import Loader from '../../../../components/Loader';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import {ICar} from '../../../../models/types';
import useListItems from '../../hooks/useListItems';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Details'>;

const ListEmptyComponent: FC = () => {
  return <TextWrapper>No items</TextWrapper>;
};

const keyExtractor = (item: ICar) => {
  return `${item.id}`;
};

const ItemSeparatorComponent: FC = () => {
  return <View style={styles.separator} />;
};

const DetailsScreen: FC<Props> = ({route}) => {
  const {id} = route?.params;
  const [openedCar, setOpenedCar] = useState<number | null>(id ?? null);
  const {isLoading, listItems} = useListItems();

  const renderItem: ListRenderItem<ICar> = ({item}) => {
    const {model, licensePlateNumber, subscriptionTillDate, services} = item;
    const toggleSlide = () => {
      setOpenedCar(openedCar === item.id ? null : item.id);
    };

    const rotatedStyle: StyleProp<ViewStyle> = {
      transform: [{rotateX: item.id === openedCar ? '180deg' : '0deg'}],
    };

    return (
      <View style={[styles.cardContainer, styles.shadow]}>
        <View style={styles.carHeader}>
          <View>
            <TextWrapper style={styles.carModel}>{model}</TextWrapper>
            <TextWrapper>{licensePlateNumber}</TextWrapper>
          </View>
          <TouchableOpacity onPress={toggleSlide} hitSlop={30}>
            <ArrowDown style={rotatedStyle} />
          </TouchableOpacity>
        </View>

        {item.id === openedCar && (
          <View>
            <TextWrapper>
              Подписка до {moment(subscriptionTillDate).format('D.MM.YYYY')}
            </TextWrapper>
            <TextWrapper style={styles.servicesHeader}>
              Информация по услугам:
            </TextWrapper>
            {services.map(service => {
              return (
                <View key={service.id} style={styles.carHeader}>
                  <TextWrapper>{service.title}:</TextWrapper>
                  <TextWrapper>{service.subTitle}</TextWrapper>
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={listItems}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
          keyExtractor={keyExtractor}
          removeClippedSubviews
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      )}
    </SafeAreaView>
  );
};
export default DetailsScreen;
