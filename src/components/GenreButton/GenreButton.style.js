import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    width: horizontalScale(70),
    height: verticalScale(70),
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
