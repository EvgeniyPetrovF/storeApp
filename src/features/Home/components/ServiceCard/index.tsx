import React, {FC} from 'react';
import {View} from 'react-native';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

type Props = {
  title: string;
  subTitle?: string;
  price: string;
  priceComment?: string;
  icon?: JSX.Element;
  currency: string;
};

const ServiceCard: FC<Props> = ({
  title,
  subTitle,
  price,
  priceComment,
  icon,
  currency,
}) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ServiceCard;
