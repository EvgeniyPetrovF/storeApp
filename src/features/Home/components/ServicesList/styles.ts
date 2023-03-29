import {StyleSheet} from 'react-native';
import {colors, dimensions, text} from '../../../../constants';

export const styles = StyleSheet.create({
  itemHeaderContainer: {
    alignItems: 'center',
  },
  subscription: {
    fontSize: text.size.small,
    color: colors.white,
    backgroundColor: colors.gray,
    borderRadius: dimensions.borderRadius.big,
    padding: dimensions.offset.tiny,
    overflow: 'hidden',
    transform: [{translateY: 15}],
  },
  carData: {
    backgroundColor: colors.midGray,
    borderRadius: dimensions.borderRadius.huge,
    paddingVertical: dimensions.offset.normal,
    paddingHorizontal: dimensions.offset.large,
    alignItems: 'center',
  },
  carModel: {
    color: colors.white,
    fontSize: text.size.large,
  },
  licenseNumber: {
    color: colors.gray,
  },
  servicesContainer: {
    justifyContent: 'space-between',
    gap: dimensions.offset.normalPlus,
    margin: dimensions.offset.small,
  },
  columnWrapper: {justifyContent: 'space-between'},
  maintenanceItems: {fontSize: text.size.default},
  fuelToFill: {
    alignSelf: 'flex-end',
    color: colors.gray,
  },
});
