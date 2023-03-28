import React, {FC} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

type Props = {
  title: string;
  subTitle?: string;
  price: string;
  priceComment?: string;
  iconImage?: string;
  warning?: string;
  currency: string;
};

const ServiceCard: FC<Props> = ({
  title,
  subTitle,
  price,
  priceComment,
  iconImage,
  warning,
  currency,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View>
            <TextWrapper>{title ?? 'Title'}</TextWrapper>
            {subTitle && <TextWrapper>{subTitle}</TextWrapper>}
          </View>
          <TextWrapper>Icon</TextWrapper>
        </View>
        <View style={styles.footer}>
          <TextWrapper>
            {price ?? 'Price'}
            {currency}
          </TextWrapper>
          <TextWrapper>{priceComment ?? 'Price comment'}</TextWrapper>
        </View>
      </View>
    </View>
  );
};

export default ServiceCard;
