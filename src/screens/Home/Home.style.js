import {StyleSheet} from 'react-native';
import {verticalScale, horizontalScale} from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252A39',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  poster: {
    width: verticalScale(190),
    height: horizontalScale(300),
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(5),
  },
});
