import React, {FC, useCallback} from 'react';
import {View} from 'react-native';
import styles from './styles';

type Props = {
  count: number;
  current?: number;
};

const PaginationProgress: FC<Props> = ({count, current = 1}) => {
  const renderDots = useCallback(() => {
    const elements = [];
    for (let i = 0; i < count; i++) {
      elements.push(
        <View
          key={i}
          style={[
            styles.dotWrapper,
            i === current ? styles.selectedDot : undefined,
          ]}>
          <View
            style={[styles.dot, i === current ? styles.selectedDot : undefined]}
          />
        </View>,
      );
    }
    return elements;
  }, [count, current]);
  return <View style={styles.container}>{renderDots()}</View>;
};

export default PaginationProgress;
