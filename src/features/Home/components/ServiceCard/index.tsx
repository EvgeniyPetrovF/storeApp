import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

type Props = {
  title: string;
  subTitle?: string;
  price: string;
  priceComment?: string;
  icon?: JSX.Element;
  currency: string;
  onPress?: () => void;
};

const ServiceCard: FC<Props> = ({
  title,
  subTitle,
  price,
  priceComment,
  icon,
  currency,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View>
            <TextWrapper style={styles.title}>{title ?? 'Title'}</TextWrapper>
            {subTitle && <TextWrapper>{subTitle}</TextWrapper>}
          </View>
          {icon}
        </View>
        <View>
          <TextWrapper style={styles.price}>
            {price ?? 'Price'}
            {currency}
          </TextWrapper>
          <TextWrapper>{priceComment ?? 'Price comment'}</TextWrapper>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
