import {StyleSheet} from 'react-native';
import {colors, dimensions, text} from '../../../../constants';
import {serviceCardWidth} from '../ServicesList';

export const styles = StyleSheet.create({
  container: {
    width: serviceCardWidth,
    aspectRatio: 1,
  },
  shadow: {
    borderRadius: dimensions.borderRadius.big,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: colors.black,
  },
  wrapper: {
    borderRadius: dimensions.borderRadius.big,
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'space-between',
    padding: dimensions.offset.normal,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centeredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: dimensions.offset.tiny,
  },
  title: {
    fontWeight: text.weight.normal,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    borderRadius: dimensions.borderRadius.large,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  warningContainer: {
    overflow: 'hidden',
    borderRadius: dimensions.borderRadius.large,
    width: 20,
    height: 20,
    backgroundColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  warningSign: {
    fontSize: text.size.default,
    color: colors.white,
  },
  price: {
    fontWeight: text.weight.bold,
    fontSize: text.size.big,
  },
  bottomOffset: {
    marginBottom: dimensions.offset.small,
  },
});
