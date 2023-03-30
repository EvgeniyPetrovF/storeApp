import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  NavigationState,
  SceneRendererProps,
  TabView,
} from 'react-native-tab-view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Loader from '../../../../components/Loader';
import PaginationProgress from '../../../../components/PaginationProgress';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import {ICar} from '../../../../models/types';
import CarHeader from '../../components/CarHeader';
import useAnimatedList from '../../hooks/useAnimatedList';
import useListItems from '../../hooks/useListItems';
import useMapboxInit from '../../hooks/useMapboxInit';
import useTabView from '../../hooks/useTabView';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;
type State = NavigationState<
  ICar & {
    key: string;
  }
>;

const ListHeaderComponent: FC = () => {
  return (
    <View style={styles.headerContainer}>
      <TextWrapper>T E S</TextWrapper>
    </View>
  );
};

const renderTabBar = ({
  navigationState: {routes, index},
}: SceneRendererProps & {navigationState: State}) => {
  const {model, subscriptionTillDate, licensePlateNumber} = routes[index];

  return (
    <View style={styles.tabBarContainer}>
      <CarHeader
        model={model}
        licensePlateNumber={licensePlateNumber}
        subscriptionTillDate={subscriptionTillDate}
        style={styles.bottomOffset}
      />
      <PaginationProgress count={routes.length} current={index} />
    </View>
  );
};

const HomeScreen: FC<Props> = () => {
  const {isLoading, listItems} = useListItems();

  const {navigationState, renderScene, setIndex, initialLayout} =
    useTabView(listItems);

  useMapboxInit();

  const {animatedOpacityStyle} = useAnimatedList({isLoading});

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.View style={[animatedOpacityStyle, styles.listContainer]}>
          <ListHeaderComponent />
          <TabView
            navigationState={navigationState}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            lazy
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
