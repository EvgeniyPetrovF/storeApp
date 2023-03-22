import React, {FC, useCallback} from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Loader from '../../../../components/Loader';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import useAnimatedList from '../../hooks/useAnimatedList';
import useListItems from '../../hooks/useListItems';
import {styles} from './styles';

const ListEmptyComponent: FC = () => {
  return <TextWrapper>No items</TextWrapper>;
};

const keyExtractor = (item: any) => {
  return `${item.id}`;
};

const ItemSeparatorComponent: FC = () => {
  return <View style={styles.separator} />;
};

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const HomeScreen: FC<Props> = ({navigation}) => {
  const {
    isLoading,
    isRefreshing,
    dryCleaners,

    refreshDryCleaners,
  } = useListItems();

  const {animatedOpacityStyle} = useAnimatedList({isLoading});

  const renderDryCleaner: ListRenderItem<any> = ({item}) => {
    const navigateToTweet = () => {
      navigation.navigate('Details', {item});
    };

    return (
      <TouchableOpacity onPress={navigateToTweet}>
        <View {...item} />
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent: FC = useCallback(() => {
    return (
      <View style={styles.headerContainer}>
        <TextWrapper>Title</TextWrapper>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.View style={[animatedOpacityStyle, styles.listContainer]}>
          <FlatList
            data={dryCleaners}
            renderItem={renderDryCleaner}
            onRefresh={refreshDryCleaners}
            refreshing={isRefreshing}
            ListHeaderComponent={ListHeaderComponent}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={keyExtractor}
            removeClippedSubviews
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
