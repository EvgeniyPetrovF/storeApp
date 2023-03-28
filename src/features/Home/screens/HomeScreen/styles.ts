import {Dimensions, StyleSheet} from 'react-native';
import {colors, dimensions, text} from '../../../../constants';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: dimensions.offset.normal,
  },
  listContainer: {
    flex: 1,
    marginVertical: dimensions.offset.normal,
  },
  listItemContainer: {
    width: windowWidth,
  },
  listHeader: {
    fontSize: text.size.big,
    fontWeight: text.weight.bold,
    marginBottom: dimensions.offset.normal,
  },
  separator: {
    borderBottomColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: dimensions.offset.small,
  },
  headerContainer: {
    alignItems: 'center',
  },
  tabBarContainer: {
    alignItems: 'center',
  },
  bottomOffset: {
    marginBottom: dimensions.offset.normal,
  },
});
