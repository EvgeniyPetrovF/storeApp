import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import moment from 'moment';
import TextWrapper from '../../../../components/TextWrapper';
import {ICar} from '../../../../models/types';
import {styles} from './styles';

type CarHeaderProps = Pick<
  ICar,
  'model' | 'subscriptionTillDate' | 'licensePlateNumber'
> & {
  style: StyleProp<ViewStyle>;
};

const CarHeader: FC<CarHeaderProps> = ({
  model,
  subscriptionTillDate,
  licensePlateNumber,
  style,
}) => {
  return (
    <View style={[styles.itemHeaderContainer, style]}>
      <TextWrapper style={styles.subscription}>
        Подписка до {moment(subscriptionTillDate).format('D.MM.YYYY')}
      </TextWrapper>
      <View style={styles.carData}>
        <TextWrapper style={styles.carModel}>{model}</TextWrapper>
        <TextWrapper style={styles.licenseNumber}>
          {licensePlateNumber}
        </TextWrapper>
      </View>
    </View>
  );
};

export default CarHeader;
