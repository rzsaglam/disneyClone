import {Dimensions} from 'react-native';

const metrics = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = size => (metrics.width / guidelineBaseWidth) * size;
const verticalScale = size => (metrics.height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {metrics, horizontalScale, verticalScale, moderateScale};
