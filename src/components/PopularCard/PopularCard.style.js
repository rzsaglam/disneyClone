import {StyleSheet} from 'react-native';
import {metrics} from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  poster: {
    height: '100%',
    width: metrics.width / 3.5,
    resizeMode: 'contain',
  },
});
