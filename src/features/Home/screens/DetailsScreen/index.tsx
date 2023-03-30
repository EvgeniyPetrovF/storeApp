import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import TextWrapper from '../../../../components/TextWrapper';
import {StackParamList} from '../../../../models/navigation';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Details'>;

const DetailsScreen: FC<Props> = ({route}) => {
  const {id} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TextWrapper>Details</TextWrapper>
    </SafeAreaView>
  );
};
export default DetailsScreen;
