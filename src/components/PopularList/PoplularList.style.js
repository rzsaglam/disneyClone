import {StyleSheet} from 'react-native';
import {metrics} from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    display: 'flex',
    height: metrics.height * 0.3,
  },
  title: {
    fontSize: 18,
    color: 'lightgray',
    textAlign: 'center',
  },
});
