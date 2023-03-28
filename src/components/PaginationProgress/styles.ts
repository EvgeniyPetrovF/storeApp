import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../constants';

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    backgroundColor: colors.gray,
    borderRadius: dimensions.borderRadius.tiny,
  },
  dotWrapper: {
    width: 12,
    height: 12,
    marginHorizontal: dimensions.borderRadius.tiny,
    borderRadius: dimensions.borderRadius.small,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDot: {
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
  },
});

export default styles;
