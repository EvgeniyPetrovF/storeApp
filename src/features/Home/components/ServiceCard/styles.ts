import {StyleSheet} from 'react-native';
import {colors, dimensions, text} from '../../../../constants';
import {serviceCardWidth} from '../ServicesList';

export const styles = StyleSheet.create({
  container: {
    width: serviceCardWidth,
    aspectRatio: 1,
  },
  wrapper: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: dimensions.offset.normal,
    shadowColor: colors.black,
    borderRadius: dimensions.borderRadius.big,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: text.weight.normal,
  },
  price: {
    fontWeight: text.weight.bold,
    fontSize: text.size.big,
  },
});
