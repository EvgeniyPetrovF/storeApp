import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

type Props = {
  title: string;
  subTitle?: string;
  price: string;
  bgColors: string[];
  priceComment?: string;
  icon?: JSX.Element;
  warningText?: string;
  currency: string;
};

const LargeServiceCard: FC<PropsWithChildren<Props>> = ({
  title,
  subTitle,
  price,
  priceComment,
  icon,
  warningText,
  bgColors,
  currency,
  children,
}) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <LinearGradient
        colors={bgColors ?? ['#E5EBF1', '#D8E1EA']}
        style={styles.wrapper}>
        <View>
          <View style={[styles.header, styles.bottomOffset]}>
            <TextWrapper style={styles.title}>{title ?? 'Title'}</TextWrapper>
            {subTitle && <TextWrapper>{subTitle}</TextWrapper>}
          </View>
          {warningText && (
            <View style={[styles.centeredRow, styles.bottomOffset]}>
              <View style={styles.warningContainer}>
                <TextWrapper style={styles.warningSign}>!</TextWrapper>
              </View>
              <TextWrapper>{warningText}</TextWrapper>
            </View>
          )}

          {children}
        </View>
        <View style={styles.footer}>
          <View>
            <TextWrapper style={styles.price}>
              {price ?? 'Price'}
              {currency}
            </TextWrapper>
            <TextWrapper>{priceComment ?? 'Price comment'}</TextWrapper>
          </View>
          {icon && (
            <View style={[styles.shadow, styles.iconContainer]}>{icon}</View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default LargeServiceCard;
